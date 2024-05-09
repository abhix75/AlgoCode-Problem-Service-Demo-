const express = require("express");
const bodyParser = require('body-parser')
const { PORT } = require("./config/server.config");
const apiRoutes = require("./routes");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api',apiRoutes);
app.get('/ping', (req, res) => {
  return res.json({message: 'Problem Service is alive'});
});

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is connected to PORT: ${PORT}`);
});
