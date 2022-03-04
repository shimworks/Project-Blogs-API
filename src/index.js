const express = require('express');

const route = require('./modules/routes');

require('dotenv').config();

const app = express();

const LOCAL_PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(route);

app.listen(LOCAL_PORT, () => console.log(`ouvindo porta ${LOCAL_PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
route.get('/', (request, response) => {
  response.send();
});
