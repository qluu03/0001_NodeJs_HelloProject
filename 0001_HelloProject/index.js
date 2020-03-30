var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./view");

app.listen(3000);

app.get("/", function(request, response)  {

    response.render("home.ejs");
});

app.get("/test", function(request, response)  {

    response.render("test.ejs");
});
app.get("/raw", function(request, response)  {

    response.render("raw.html");
});
