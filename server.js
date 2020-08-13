const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("client/build"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/'));
});

app.listen(PORT, () => {
    console.log('Port is running');
});