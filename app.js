const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const songRoutes = require('./routes/songRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


app.use('/uploads', express.static('uploads'));


app.use('/songs', songRoutes);



app.listen(3000, () => {
    console.log('Server started on port 3000');
});
