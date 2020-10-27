const express = require('express');
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());


const routes = require("./routes");

routes(app);

app.listen(process.env.PORT || port);