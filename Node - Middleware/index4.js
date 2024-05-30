import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({ extended: true }));
var brandName = "";

function bandNameGenerator(req,res,next){
  console.log(req.body);
  brandName = req.body["street"] + req.body["pet"]
  next();
};
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  });

app.post("/submit", (req, res) => {
  res.send(`<H1>Your brand name is ${brandName}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
