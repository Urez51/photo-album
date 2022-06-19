const router = require('express').Router();
const { Album, Photo, User } = require('../../db/models');
const AlbumView = require('../../views/AlbumView');
const EditPhoto = require('../../views/EditPhoto');
const Error = require('../../views/Error');

router.get('/:album_id', async (req, res) => {
  try {
    const id = req.session.userId;
    const user = await User.findOne({ where: id });
    const alb = req.params.album_id;
    const albumName = await Album.findOne({ where: { id: alb }, raw: true });
    const photos = await Photo.findAll({ where: { album_id: alb }, raw: true });
    res.renderComponent(AlbumView, { photos, albumName, user });
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const photo = await Photo.findOne({ where: { id: req.params.id } });
    await photo.destroy();
    res.send('this photo has deleted');
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const id = req.session.userId;
    const user = await User.findOne({ where: id });
    const photoId = req.params.id;
    const photo = await Photo.findOne({ where: { id: photoId } });
    res.renderComponent(EditPhoto, { photo, user });
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});

router.post('/edit/:photo_id', async (req, res) => {
  try {
    const value = req.body.inputChange; // значение в инпуте
    const photoId = req.params.photo_id;
    const photo = await Photo.findOne({ where: { id: photoId } });
    photo.title = value;
    await photo.save();
    res.redirect(`/album/${photo.album_id}`);
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});

module.exports = router;
