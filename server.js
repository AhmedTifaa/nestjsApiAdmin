const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/admin-frontend'));

app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/dist/admin-frontend/index.html'));
});


app.listen(process.env.PORT || 4200);
