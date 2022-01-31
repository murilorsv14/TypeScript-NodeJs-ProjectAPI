const PORT = 3000;

import express from 'express';
const app = express();

app.listen(PORT, ()=> console.log(`Listen on port ${PORT}`));

app.get('/ping/', (req, res) => {
  res.status(200).send({ message: 'pong' });
});
