const express = require("express")
const mongoose = require("mongoose");
const morgan = ("morgan");
const PORT = process.env.PORT || 3030;

// const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongod: //localhost/workout", {useNewUrlParser: true});

require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)


app.listen(PORT, function(){
    console.log("Server.istening on: http://localhost:" + PORT);
})
