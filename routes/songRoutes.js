const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/', songController.listSongs);
router.get('/upload', (req, res) => res.render('upload'));
router.post('/upload', songController.uploadSong);


router.get('/songs/upload', (req, res) => {
    res.render('upload'); 
});


router.post('/songs/upload', songController.uploadSong);

module.exports = router;
