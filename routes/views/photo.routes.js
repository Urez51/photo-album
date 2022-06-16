const { Router } = require('express');
const fileMiddleware = require('../../middlewares/file');
const AddPhoto = require('../../views/AddPhoto');
const { Photo } = require('../../db/models');

const router = Router();

router.get('/', (req, res) => {
  res.renderComponent(AddPhoto);
});

router.post('/:id', fileMiddleware.single('foto'), async (req, res) => {
  try {
    if (req.file) {
      const photo = await Photo.create({
        url: req.file.path,
        title: req.body.title,
        album_id: req.params.id,
      });
      res.status(200);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
