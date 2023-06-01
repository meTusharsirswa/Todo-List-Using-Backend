const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static("views"));
const Todo = require("./model/Todo");
mongoose
  .connect("mongodb://localhost/Todo_List", { useNewUrlParser: true })
  .then(() => {
    console.log("Database is Connected ");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (req, res) => {
  var todos = await Todo.find({});
  res.render("index", {
    todos,
  });
});

app.post("/posts/store", async (req, res) => {
  await Todo.create(req.body);
  res.redirect("/");
});

app.post('/',(req,res)=>{
  const deletedTodo = req.body.deletebtn
  Todo.findByIdAndDelete(deletedTodo,(err)=>{
  if(err){
    console.log(err)
  }else{
  //  res.send("Okay")
 res.redirect('/')
  console.log("success")
  }
})
})

app.listen(4000, () => {
  console.log("Server is listening on port 3000");
});
