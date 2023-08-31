const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.send('Hello World!')
  res.sendFile(__dirname+"/index2.html");
})

app.listen(port, () => {
  console.log("Example app listening on port "+port);
})