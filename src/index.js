const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRoutes = require("./routes");

const app = express();
const connectToDb = require("./config/db.config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter

  console.log(`Server is connected to PORT: ${PORT}`);
  await connectToDb();
  console.log("Successfully connected to db");

  /*   Dummy Data For Testing the connection of DB

         const Cat = mongoose.model('Cat', { name: String });
         const kitty = new Cat({ name: 'Zildjian' });
         kitty.save().then(() => console.log('meow'));
*/
});
