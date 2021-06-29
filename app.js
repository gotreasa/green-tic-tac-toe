const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(helmet());
app.use(cors());

app.get('/api/TicTacToe/newGame', (_, response) => (response.status(200).json()));

const server = app.listen('9080', () => {
  console.log(`🚀 Template NodeJS app listening at http://localhost:${server.address().port}`);
});
