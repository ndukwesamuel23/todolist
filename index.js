const express =  require("express");
const bodyparser = require("body-parser");

const app = express();
// var items = "" it was use so when call it  //can work for both  using scope // but we have to use and array so that it will 
//not chane when a new one is called and we will use for loop for it 

var items = [" sam",]


app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// first call   
app.get("/", function(req, res){
    res.send("i love coding ")
})

// this is hear due to the fact
//  we want to work 
// with the views on ejs


/// so the code here is to creat a todo lis
app.get("/v", function(req, res){

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day =today.toLocaleDateString("en-US", options);

    // this is to make the date sturcture

    res.render("index",
     {  kingofday: day, newlistitems: items}); 
     //if we stop here is will only make new one to chnage
    
})

app.post("/v",function(req, res){
     item = req.body.newlist

    res.redirect("/v");

    // items.push(item) was use so that for a new 
    //item that is been put it will push it to the items array
    items.push(item);
    console.log(item);
});




// this what server will lsiten

app.listen(process.env.PORT || 3000, function(){
    console.log("server is running baba on prot 3000")
})