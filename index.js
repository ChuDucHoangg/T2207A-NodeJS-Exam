const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Running code node js on localhost:3000");
})

const session = require("express-session");
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "abcdefghijklmnopqrstuvwxyz",
        cookie: {
            maxAge: 3600000,
            secure: false, 
        }
    })
);

require("./src/database/database");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productrouter = require("./src/routes/product.router");
app.use("/", productrouter);
