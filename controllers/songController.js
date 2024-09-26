const multer = require('multer');
const path = require('path');
const Song = require('../models/songModel');


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({
    storage: storage,
   
  }).fields([{ name: 'song' }, { name: 'cover' }]);

exports.uploadSong = (req, res) => {
    upload(req, res, (err) => {
        if (err) return res.status(400).send(err.message);
        
        const { title, artist, album } = req.body;
        const songPath = req.files['song'][0].path;
        const coverPath = req.files['cover'][0].path;
        
        Song.createSong(title, artist, album, songPath, coverPath, (err) => {
            if (err) throw err;
            res.redirect('/songs');
        });
    });
};

exports.listSongs = (req, res) => {
    Song.getAllSongs((err, results) => {
        if (err) throw err;
        res.render('songs', { songs: results });
    });
};
