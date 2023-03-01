const cors = require ("cors");
const express = require ("express");
const UserInfo = require ("./userInfo");
const app = express();
const fs = require("fs");

app.use(cors());

app.get("/:Username&:Password&:Comment", (req,res) =>{
  const UserName = req.params.Username;
  const Password = req.params.Password;
  const Comment = req.params.Comment;

  var tempObject = {
    Name:UserName,
    Password:Password,
    comment:Comment
  }
  var object =JSON.parse(tempObject);
  fs.writeFile("/UserInfo.json",object , (err) =>{
    if (err) throw error;
    console.log("New Data Added");
  })
})

app.use("/get",()=>{
  res.send(UserInfo)
})
app.get ("/", (req,res)=>{
  res.send("Hello world");
})

module.exports = app;