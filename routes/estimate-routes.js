"use strict";


const express = require("express");
const pool = require("../pg-connection-pool");
const pg = require("pg");
const estimateRouter = express.Router();


// estimateRouter.get("/store", (req, res) => {
//   pool.query("SELECT * FROM store ORDER BY id").then((response)=>{
//     console.log(response.rows);
//     res.send(response.rows);
//   });
// });

estimateRouter.post("/clients", (req, res) => {
  pool.query("INSERT INTO clients (name, products, total) VALUES ($1::text, $2::text, $3::int)", [req.body.name, req.body.products, req.body.total]).then(() => {
      pool.query("SELECT * FROM clients ORDER BY id").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
  })
  })
});

// estimateRouter.get("/grandtotal", (req, res) => {
//     pool.query("SELECT SUM(price * quantity) FROM shopping_cart;").then((result)=> {
//       console.log(result.rows[0].sum);
//       res.send(result.rows[0].sum);
//   });
//   console.log("get grand total at store");
// });


// estimateRouter.delete("/cart-items/", (req, res) => {
//   console.log("clear cart on routes");  
//   pool.query("DELETE FROM shopping_cart")
//   .then(() => {
//     pool.query("SELECT * FROM shopping_cart ORDER BY id").then((result) => {
//       res.send(result.rows);
//     });
//   });
// });


module.exports = estimateRouter;