const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hellor express!');
});

app.listen(3000, () => console.log('Server running'));