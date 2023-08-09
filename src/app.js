const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");
const static_path = path.join(__dirname ,"../public");
const view_path = path.join(__dirname ,"../templets/views");
const par_path = path.join(__dirname ,"../templets/parcitals");
// app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views' , view_path);
hbs.registerPartials(par_path);
app.use(express.static(static_path));

//weather 

app.get("/",(req,res) => {
    res.render("index");
});
app.get("/about",(req,res) => {
    res.render("about");
});
app.get("/weather",(req,res) => {
    res.render("weather");
});
app.get("*",(req,res) => {
    res.render("error");
});
app.listen(port,() =>{
    console.log(`listing port number ${port}`);
});