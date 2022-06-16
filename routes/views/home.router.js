const homeRouter = require('express').Router();
// const bcrypt = require('bcrypt');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { User, Album, Photo } = require('../../db/models');
// const LayoutHome = require('../../views/home/LayoutHome');
const viesAlbunOnHome = require('../../views/home/viesAlbunOnHome');
// const Login = require('../../views/Login');
// const Register = require('../../views/Register');

homeRouter.get('/', async (req, res) => {
  if (req.session.userId) {
    const id = req.session.userId;
    // console.log(id);
    const user = await User.findOne({ where: id });
    // console.log(user);
    const albumsUser = await Album.findAll({ where: { user_id: id } });
    // console.log(albumsUser);
    const allAlbum = await Album.findAll({
      raw: true,
      where: { privat: true },
      order: [
        ['createdAt', 'DESC'],
      ],
      limit: 10,
    });
    // console.log(allAlbum);
    const allPhotos = await Photo.findAll({ raw: true });
    const photoInTen = allAlbum.map((album) => allPhotos.filter((photo) => album.id === photo.album_id));
    console.log(photoInTen);
    // const photoInAlbum = await albums.map(async (album) => await Photo.findOne({ where: { album_id: album.id } }));
    // console.log(photoInAlbum);
    const regForm = React.createElement(viesAlbunOnHome, { user, albumsUser, photoInTen });
    const html = ReactDOMServer.renderToStaticMarkup(regForm);
    // console.log(html);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } else {
    res.redirect('/');
  }
});
module.exports = homeRouter;
