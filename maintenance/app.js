require("dotenv").config({ path: "./app/config/.env" });
const express = require("express");
const router = require("./app/router/router");
const path = require('path');

const app = express();

app.set("view engine", "ejs");
const pathToViews = path.resolve(__dirname, "./app/views");
app.set("views", pathToViews);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(router);

app.listen(process.env.PORT || 3333, () => {
  console.log(
    `Maintenance server started on PORT : ${
      process.env.PORT
    } - [${new Date().toISOString()}]`
  );
});
