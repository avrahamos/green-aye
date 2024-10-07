const exp = require("express");
const dotenv = require("dotenv");
const app = exp();
dotenv.config();
const port = process.env.PORT || 9999;

app.listen(port, () => {
  console.log(port, `runing in ${port}`);
});
