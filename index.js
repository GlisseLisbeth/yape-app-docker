
const PORT = 8080;
const HOST = '0.0.0.0';

const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hellor express!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);