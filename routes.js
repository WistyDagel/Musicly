const path = require('path')

module.exports = app => {

    const control = require("./controller");

    app.route('/upload').post(control.uploadImage);

    app.get('/', (req, res) => {
        // res.send('./index.html');
        res.sendFile(path.join(__dirname, 'index.html'))
    });
}

