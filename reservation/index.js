require("dotenv").config({ path: "./app/config/.env" });
const express = require("express");
const router = require("./app/router");

const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static("public"));
server.use(router);

server.listen(process.env.PORT || 1337, () => {
  console.log(
    `Reservation server started on PORT : ${
      process.env.PORT || 1337
    } - [${new Date().toISOString()}]`
  );
});
