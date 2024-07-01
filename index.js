import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const users = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/register" , (req,res)=>{
    res.render("register.ejs");
    // console.log(users);
});

app.post("/register" , async (req, res)=> {
    // try {
    //     const hashedPassword = await bcrypt.hash(req.body.password, 10)
    //     const user = { name: req.body.name, email: req.body.email , password: hashedPassword }
    //     users.push(user)
    //     res.status(201).send()
    //     res.render("index.ejs");
    // } catch {
    //     res.status(500).send()
    // }
    const user = { name: req.body.name, email: req.body.email , password: req.body.password };
    console.log(user);
    res.status(201).send();
    res.render("index.ejs");
});

app.get("/login" , (req,res)=>{
    res.render("login.ejs");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});