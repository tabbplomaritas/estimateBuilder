const express = require("express");
const app = express();
// respond with "Hello Class!" on the homepage
// app.get("/students", (req, res) => {
// res.send("Hello Class!");
// });

app.get('/', (req, res) => res.send('Hello World!'))

//set up port, 3000 or 8080, my choice!
const port = process.env.PORT || 5000;

app.listen(port, () => { 
  console.log(`Server listening on ${port}.`);
});