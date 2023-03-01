const cors = require ("cors");
const express = require ("express");
const UserInfo = require ("./userInfo");
const app = express();
const fs = require("fs");

app.use(cors());
app.json();

app.post("/:Username&:Password&:Comment", (req,res) =>{
  
  
  const UserName = req.params.Username;
  const Password = req.params.Password;
  const Comment = req.params.Comment;
  
  if (UserName !=""|| Password != "" || Comment != ""){

    req.body.Name = UserNames;
    req.body.Password = Password;
    req.body.comment = Comment;
    UserInfo.push(req.body);
    res.send(UserInfo);
  }
})

app.use("/get",()=>{
  res.send(UserInfo)
})

app.get ("/", (req,res)=>{
  res.send("Hello world");
})

module.exports = app;