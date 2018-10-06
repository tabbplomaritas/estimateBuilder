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

estimateRouter.post("/clients", (req, res) => {
  pool.query("INSERT INTO clients (name) VALUES ($1::text)", [req.body.name]).then(() => {
    pool.query("SELECT * FROM clients ORDER BY id")
  }).then((response)=>{
    console.log(response.rows);
    res.send(response.rows);
  });
});

// estimateRouter.post("/clients", (req, res) => {
//   pool.query("INSERT INTO clients (name, products, total) VALUES ($1::text, $2::text, $3::int)", [req.body.name, req.body.products, req.body.total]).then(() => {
//     pool.query("SELECT * FROM clients ORDER BY id")
//   }).then((response)=>{
//     console.log(response.rows);
//     res.send(response.rows);
//   });
// });

// storeRouter.post("/store", (req, res) => {
//   pool.query("INSERT INTO shopping_cart (product, price, quantity, url, category, vendor, id) VALUES ($1::text, $2::money, $3::int, $4::text, $5::text, $6::text, $7::int)", [req.body.product, req.body.price, 1, req.body.url, req.body.category, req.body.vendor, req.body.id]).then(() => {
//     pool.query("UPDATE shopping_cart SET item_total = quantity*price;").then(()=>{
//       pool.query("SELECT * FROM store ORDER BY id").then((result) => {
//       console.log(result.rows);
//       res.send(result.rows);
//     });
//   })
//   })
// });




module.exports = estimateRouter;