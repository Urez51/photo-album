/* eslint-disable new-cap */
const { Router } = require('express');
const admzip = require('adm-zip');
const fs = require('fs');
const AddZip = require('../../views/AddZip');
const { Photo } = require('../../db/models');
const router = Router();

router.get('/', (req, res) => {
  res.renderComponent(AddZip);
});

router.post('/:id', async (req, res) => {
  try {
    const zip = new admzip();
    const { id } = req.params;
    const photo = await Photo.findAll({ where: { album_id: id }, raw: true });
    photo.forEach((file) => {
      zip.addLocalFile(file.url);
    });
    const outputPath = `${Date.now()}output.zip`;

    fs.writeFileSync(outputPath, zip.toBuffer());

    res.download(outputPath, (err) => {
      if (err) {
        req.files.forEach((file) => {
          fs.unlinkSync(file.path);
        });
        fs.unlinkSync(outputPath);
        res.send('Error in download zip file');
      }
      req.files.forEach((file) => {
        fs.unlinkSync(file.path);
      });
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
