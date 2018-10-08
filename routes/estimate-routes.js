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

estimateRouter.get("/test", (req, res) => {
  pool.query("SELECT * FROM test").then((response)=>{
    console.log(response.rows);
    res.send(response.rows);
  });
});

estimateRouter.post("/test", (req, res) => {
  pool.query("INSERT INTO test VALUES ($1::text, $2::text)", [req.body.firstname, req.body.lastname]).then(()=>{
    pool.query("SELECT * FROM test").then((response)=>{
    console.log(response.rows);
    res.send(response.rows);
  });
})
});


estimateRouter.post("/clients", (req, res) => {
  console.log(req.body);
  
  pool.query("INSERT INTO clients (name, summary, products, total, deadline) VALUES ($1::text, $2::text, $3::text, $4::int, $5::text)", [req.body.name, req.body.summary, req.body.products, req.body.total, req.body.deadline]).then(() => {
    pool.query("SELECT * FROM clients ORDER BY id").then((response)=>{
    console.log(response.rows);
    res.send(response.rows);
  });
});
});

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

