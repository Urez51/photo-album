const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const { Album, Photo } = require('../../db/models');

const AlbumView = require('../../views/AlbumView');

router.get('/:album_id', async (req, res) => {
  // const id = req.session.userId;
  const alb = req.params.album_id;
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

module.exports = router;

router.put('/edit/:id', async (req, res) => {
  
});
