//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({ extended: true }));
var passWord = "ILoveProgramming";

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    });

app.post("/check", (req, res) => {
    if (req.body["password"] === passWord){
        res.sendFile(__dirname + "/public/secret.html");
    } else{
        res.sendFile(__dirname + "/public/index.html");
    }
  });
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});