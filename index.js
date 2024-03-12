import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/register" , (req,res)=>{
    res.render("register.ejs");
});

app.get("/login" , (req,res)=>{
    res.render("login.ejs");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});