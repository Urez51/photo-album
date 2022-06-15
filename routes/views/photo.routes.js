const { Router } = require('express');
const fileMiddleware = require('../../middlewares/file');
const AddPhoto = require('../../views/AddPhoto');
const { Photo } = require('../../db/models');

const router = Router();

router.get('/',  (req, res) => {
  res.renderComponent(AddPhoto);
});

router.post('/', fileMiddleware.single('foto'), async (req, res) => {
  try {
    if (req.file) {
      console.log(req.file);
      console.log(req.file.path);
      const photo = await Photo.create({
        url: req.file.path,
        title: 'Фото отпад',
        album_id: 1,
      });
      console.log(photo);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
