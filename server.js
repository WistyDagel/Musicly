const express = require('express');
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());


const routes = require("./routes");

routes(app);

app.use(express.static('/css'));
app.use(express.static(__dirname + '/'));
app.get('/index.html', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || port);