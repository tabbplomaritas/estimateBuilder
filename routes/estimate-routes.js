"use strict";


const express = require("express");
const pool = require("../pg-connection-pool");
const pg = require("pg");
const estimateRouter = express.Router();


estimateRouter.get("/clients", (req, res) => {
  pool.query("SELECT * FROM clients ORDER BY id").then((response)=>{
    console.log(response.rows);
    res.send(response.rows);
  });
});




module.exports = estimateRouter;