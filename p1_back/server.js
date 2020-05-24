const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

global.ValueSet = require("./api/models/valueSetModel");
const routes = require("./api/routes/valueSetRoutes");

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/labtec", { useNewUrlParser: true });

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);
