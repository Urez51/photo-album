/* eslint-disable max-len */
const homeRouter = require('express').Router();
const { User, Album, Photo } = require('../../db/models');
const viesAlbunOnHome = require('../../views/home/viesAlbunOnHome');
const Error = require('../../views/Error');

homeRouter.get('/', async (req, res) => {
  try {
    if (req.session.userId) {
      const id = req.session.userId;
      const user = await User.findOne({ where: id });
      const albumsUser = await Album.findAll({ where: { user_id: id } });
      const allAlbum = await Album.findAll({
        raw: true,
        where: { privat: true },
        order: [
          ['createdAt', 'DESC'],
        ],
      });
      const allPhotos = await Photo.findAll({ raw: true });
      const photoNON = allAlbum.map((album) => allPhotos.filter((photo) => album.id === photo.album_id));
      const photoInTen = photoNON.filter((el) => el.length !== 0);
      res.renderComponent(viesAlbunOnHome, { user, albumsUser, photoInTen });
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});

module.exports = homeRouter;
