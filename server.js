const express = require("express");
const app = express();
// respond with "Hello Class!" on the homepage
// app.get("/students", (req, res) => {
// res.send("Hello Class!");
// });

app.get('/', (req, res) => res.send('Hello World!'))

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));