const cors = require ("cors");
const express = require ("express");
const UserInfo = require ("./userInfo");
const app = express();
app.use(cors());

app.get("/:Username&:Password&:Comment", (req,res) =>{
  const UserName = req.params.Username;
  const Password = req.params.Password;
  const Comment = req.params.Comment;
})

module.exports = app;