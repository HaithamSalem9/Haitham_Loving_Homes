import express from "express";
import bodyParser from "body-parser" ;


const app= express();
app.use(express.static('public'));
const port = 3000;

app.use(bodyParser.urlencoded( { extended : true}));

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));


app.get("/" , (req , res ) => {
    res.render("index.ejs")
});


app.get ("/index2" , (req , res) => {
    res.render("index2.ejs");
})



app.get ("/index3" , (req , res) => {
    res.render("index3.ejs");
})


app.get ("/index4" , (req , res) => {
    res.render("index4.ejs");
})


app.get ("/about_us" , (req , res) => {
    res.render("about_us.ejs");
})


app.get ("/index5" , (req , res) => {
    res.render("index5.ejs");
})


app.get ("/index6" , (req , res) => {
    res.render("index6.ejs");
})


app.get ("/index7" , (req , res) => {
    res.render("index7.ejs");
})


app.get ("/index8" , (req , res) => {
    res.render("index8.ejs");
})





app.post("/submit", (req , res ) => {
console.log("User Name : "+ req.body.user_name +" " +"Email : "+req.body.email );
console.log("User Message : " +req.body.message );
res.render("about_us.ejs");

});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

