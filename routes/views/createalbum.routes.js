const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const { Album, Photo } = require('../../db/models');

const AlbumView = require('../../views/AlbumView');
const EditPhoto = require('../../views/EditPhoto');
const AlbumAdd = require('../../views/AlbumAdd');

router.get('/album/create', (req, res) => {
  // const element = React.createElement(AlbumAdd, {});
  // const html = ReactDOMServer.renderToStaticMarkup(element);
  // res.write('<!DOCTYPE html>');
  // res.end(html);
  res.send('priver');
});

module.exports = router;
