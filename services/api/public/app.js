require("dotenv").config();
const express = require("express");
const app = express();
const upload = require("express-fileupload");
const bodyParser = require('body-parser');
const compression = require("compression");
const path = require('path');
var cors = require('cors')
const fs = require('fs');
const publicRouter = require('./public.router');
// const docs = require('./../docs');
// const swaggerUi = require('swagger-ui-express');


// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs, {}));
// // app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
// const _webview_folder = 'deploy-dist/web-views';

// app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

app.use(compression());

// ---- SERVE STATIC FILES ---- //
// app.get('*.*', express.static(_studapp_folder, {maxAge: '1y'}));

// app.use('/', express.static(_webview_folder));
// ---- SERVE STATIC FILES ---- //
// app.get('*.*', express.static(_studapp_folder, {maxAge: '1y'}));
app.use(express.static('public'))
// app.use(express.json());
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({extended: true,limit: '50mb'}));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true ,limit: '50mb'}));
// app.use(express.bodyParser({limit: '50mb'}));
app.use(upload());
// console.log("cors origin client url",process.env.CLIENT_URL);
const corsOptions = {
  origin: process.env.CLIENT_URL,
  // optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization,On-behalf-of, append,delete,entries,foreach,get,has,keys,set,values,pragma,cache-control');
  next();
});


app.get('/', (req, res) => {
  res.send(`<h1>API Running on port ${process.env.FRONT_END_PORT}</h1>`);
});

// ---- START UP THE NODE SERVER  ----
app.listen(process.env.FRONT_END_PORT, () => {
  console.log("Server for Mobile " + app.name + " up and running on port : ", process.env.FRONT_END_PORT);
});

app.use("/api",publicRouter)

app.get('/*', function (req, res) {

  const root = path.join(__dirname.replace('api\\mobile','') + '/deploy-dist/web-views');
  fs.stat(root + req.path, function (err) {
        if (err) {
          res.sendFile("index.html", { root });
        } else {
          res.sendFile(req.path, { root });
        }
      })
});


