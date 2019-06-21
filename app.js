const express     = require('express');
const bodyParser  = require('body-parser');
const levelup     = require('levelup');
const leveldown   = require('leveldown');
const encode      = require('encoding-down');
const morgan      = require('morgan');
const morganjson  = require('morgan-json');
const apiUsers    = require('./api/users');

const app = express();
const db  = levelup(encode(leveldown('./data/users', {valueEncoding: 'json'})));

const path = __dirname + '/views/';

const format = morganjson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(express.static(path));
app.use(morgan(format));

const router = express.Router();

router.use( (req,res,next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (req,res) => {
  res.json({ name: 'yape-api',version: "0.0.3"});
});

app.use('/api', apiUsers(router, db));

const port = process.env.PORT || 3000;

app.listen(port,  () => {
  console.log('Server running on port!' + port + '!');
});