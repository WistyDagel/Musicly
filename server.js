const express = require('express');
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());


const routes = require("./routes");

routes(app);

//Incudes the css file with the index page. Style would not load without this
app.use(express.static('/css'));
app.use(express.static(__dirname + '/'));
app.use(express.urlencoded({
    extended: true
}));

app.listen(process.env.PORT || port);