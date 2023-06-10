const express = require('express');
const router = express.Router();
const isBase64 = require('is-Base64');
const base64Img = require('base64-img');
const fs = require('fs');

const { Media } = require('../models');

// get all images
router.get('/', async (req, res) => {
  const media = await Media.findAll({
    attributes: ['id', 'image']
  });

  const mappedMedia = media.map((m) => {
    m.image = `${req.get('host')}/${m.image}`;
    return m;
  })

  return res.json({
    status: 'success',
    data: mappedMedia
  })
})

// upload images
router.post('/', (req, res) => {
  const image = req.body.image; // mengambil image pada body
  // mengecek apakah image memiliki format base 64 atau tidak
  if (!isBase64(image, { mimeRequired: true })) {
    return res.status(400).json({ status: 'error', message: 'Invalid base64 image' });
  }

  // memberikan format penamaan dan lokasi penyimpanan dari image
  base64Img.img(image, './public/images', Date.now(), async (err, filepath) => {
    if (err) {
      return res.status(err).json({ status: 'error', message: err.message });
    }

    const filename = filepath.split('\\').pop().split('/').pop(); // format filename

    const media = await Media.create({ image: `images/${filename}` }); //upload image

    return res.json({
      status: 'success',
      data: {
        id: media.id,
        image: `http://${req.get('host')}/images/${filename}`
      }
    });
  })
})

// delete image
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  const media = await Media.findByPk(id);

  if (!media) {
    return res.status(404).json({ status: 'error', message: 'Media not found'});
  }

  fs.unlink(`./p  ublic/${media.image}`, async (err) => {
    if (err) {
      return res.status(404).json({ status: 'error', message: err.message });
    }

    await media.destroy();

    return res.json({ status: 'success', message: 'Image deleted' })
  })
})

module.exports = router;
