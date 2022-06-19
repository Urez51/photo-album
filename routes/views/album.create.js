const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const { Album, User } = require('../../db/models');

const AddAlbumView = require('../../views/AddAlbum');

router.get('/', async (req, res) => {
  const id = req.session.userId;
    // console.log(id);
    const user = await User.findOne({ where: id });
  const element = React.createElement(AddAlbumView,{user});
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  const id = req.session.userId;
  try {
    if (req.body.checkbox === 'on') {
      const album = await Album.create({
        title: req.body.title,
        body: req.body.body,
        user_id: id,
        privat: false,
      });
      res.status(200);
      res.redirect(`/Home`);
    }
    if (!req.body.checkbox) {
      const album = await Album.create({
        title: req.body.title,
        body: req.body.body,
        user_id: id,
        privat: true,
      });
      res.status(200);
      res.redirect(`/Home`);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
