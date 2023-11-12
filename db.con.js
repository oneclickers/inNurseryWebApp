var express = require('express');
var router = express.Router();
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'in.Nursery.WebApp.com',
  password: 'Selvam55@',
  port: 5555,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected Successfully...!");
});

module.exports = client;