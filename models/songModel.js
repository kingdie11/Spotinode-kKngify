const db = require('./db');

exports.createSong = (title, artist, album, filePath, coverPath, callback) => {
    const sql = 'INSERT INTO songs (title, artist, album, file_path, cover_image) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [title, artist, album, filePath, coverPath], callback);
};

exports.getAllSongs = (callback) => {
    const sql = 'SELECT * FROM songs';
    db.query(sql, callback);
};
