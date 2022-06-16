const { Router } = require('express');
const admzip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const multer = require('multer');
const AddZip = require('../../views/AddZip');
const { Photo } = require('../../db/models');

const router = Router();

const dir = 'images';
const subDirectory = 'images/uploads';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  fs.mkdirSync(subDirectory);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'images/uploads');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toString()}-${file.originalname}`);
  },
});

const types = ['image/png', 'image/jpeg', 'images/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const compressfilesupload = multer({ storage, fileFilter });

router.get('/', (req, res) => {
  res.renderComponent(AddZip);
});

router.post('/:id', compressfilesupload.array('file', 100), async (req, res) => {
  try {
    const zip = new admzip();
    const id = req.params.id;
    const photo = await Photo.findAll({ where: { album_id: id }, raw: true });
    console.log(photo);

    // const url = photo.map((el) => el.url);
    // console.log(url);

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

    // if (req.files) {
    //   req.files.forEach((file) => {
    //     console.log(file.path);
    //     zip.addLocalFile(file.path);
    //   });
    //   const outputPath = `${Date.now()}output.zip`;

    //   fs.writeFileSync(outputPath, zip.toBuffer());

    //   res.download(outputPath, (err) => {
    //     if (err) {
    //       req.files.forEach((file) => {
    //         fs.unlinkSync(file.path);
    //       });
    //       fs.unlinkSync(outputPath);
    //       res.send('Error in download zip file');
    //     }
    //     req.files.forEach((file) => {
    //       fs.unlinkSync(file.path);
    //     });
    //     fs.unlinkSync(outputPath);
    //   });
    // }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
