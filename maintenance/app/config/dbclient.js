const { Pool } = require("pg");

const client = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: oparc,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
