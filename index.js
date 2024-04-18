import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
