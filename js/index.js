require("dotenv").config();
const  app = require("./App");
const port = process.env.port;

app.listen(port, () =>{
  console.log(`Port :${port}`)
})