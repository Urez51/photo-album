const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const { Album, Photo } = require('../../db/models');

const AlbumView = require('../../views/AlbumView');
const EditPhoto = require('../../views/EditPhoto');
const AlbumAdd = require('../../views/AlbumAdd');

router.get('/:album_id', async (req, res) => {
  // const id = req.session.userId;
  const alb = req.params.album_id;
  console.log(alb);
  const albumName = await Album.findOne({ where: { id: alb }, raw: true });
  const photos = await Photo.findAll({ where: { album_id: alb }, raw: true });
  const element = React.createElement(AlbumView, { photos, albumName });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.delete('/:id', async (req, res) => {
  await Photo.destroy({ where: { id: req.params.id } });
  res.send('this photo has deleted');
});

router.get('/edit/:id', async (req, res) => {
  const photoId = req.params.id;
  const photo = await Photo.findOne({ where: { id: photoId } });
  const element = React.createElement(EditPhoto, { photo });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(html);
});

router.post('/edit/:photo_id', async (req, res) => {
  const value = req.body.inputChange; // значение в инпуте
  const photoId = req.params.photo_id;
  const photo = await Photo.findOne({ where: { id: photoId } });

  photo.title = value;

  await photo.save();
  res.redirect(`/album/${photo.album_id}`);
});

module.exports = router;
