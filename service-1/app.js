'use strict';

const express = require('express');

const app = express();

app.get('/service-1/', (req, res) => {
  res.status(200).send('Service 1: Running service 1!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`service-1 server listening on port ${PORT}`);
});
