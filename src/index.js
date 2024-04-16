const express = require("express");
const bodyParser = require('body-parser')
const { PORT } = require("./config/server.config");
const apiRoutes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// app.get("/ping", (req, res) => {
//   return res.json({
//     message: "Problem Service is alive",
//   });
// });
app.use('/api',apiRoutes);
app.listen(PORT, () => {
  console.log(`Server is connected to PORT: ${PORT}`);
});
