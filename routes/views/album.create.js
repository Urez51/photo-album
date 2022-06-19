/* eslint-disable no-unused-vars */
const router = require('express').Router();

const { Album, User } = require('../../db/models');

const AddAlbumView = require('../../views/AddAlbum');
const Error = require('../../views/Error');

router.get('/', async (req, res) => {
  try {
    const id = req.session.userId;
    const user = await User.findOne({ where: id });
    res.renderComponent(AddAlbumView, { user });
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
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
      res.redirect('/Home');
    }
    if (!req.body.checkbox) {
      const album = await Album.create({
        title: req.body.title,
        body: req.body.body,
        user_id: id,
        privat: true,
      });
      res.status(200);
      res.redirect('/Home');
    }
  } catch (err) {
    res.renderComponent(Error);
    console.log(err);
  }
});

module.exports = router;
