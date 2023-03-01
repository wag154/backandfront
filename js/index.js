require("dotenv").config();
const app = require("./App");
const port = 3001;

app.listen(port, () =>{
  console.log(`Port :${port}`)
})