const express = require('express');
const router = express.Router();
const isBase64 = require('is-Base64');
const base64Img = require('base64-img');

const { Media } = require('../models');

router.post('/', (req, res) => {
  const image = req.body.image; // mengambil image pada body

  // mengecek apakah image memiliki format base 64 atau tidak
  if (!isBase64(image, { mimeRequired: true })) {
    return res.status(404).json({ status: 'error', message: 'Invalid base64 image' });
  }

  // memberikan format penamaan dan lokasi penyimpanan dari image
  base64Img.img(image, './public/images', Date.now(), async (err, filepath) => {
    if (err) {
      return res.status(err).json({ status: 'error', message: err.message });
    }

    const filename = filepath.split('\\').pop().split('/').pop();

    const media = await Media.create({ image: `image/${filename}` }); 

    return res.json({
      status: 'success',
      data: {
        id: media.id,
        image: `${req.get('host')}/images/${filename}`
      }
    });
  })
})

module.exports = router;
