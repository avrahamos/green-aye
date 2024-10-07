const exp = require("express");
const dotenv = require("dotenv");
const { connectToMongo } = require("./config/dbConfig");
const app = exp();
dotenv.config();
connectToMongo();
const port = process.env.PORT || 9999;

app.use(exp.json());
app.use("auth", require("./routers/authRuoter"));
app.use("/user", require("./routers/userRout"));
app.use("/greeneye", require("./routers/greenEyeRouter"));

app.listen(port, () => {
  console.log(port, `runing in ${port}`);
});
