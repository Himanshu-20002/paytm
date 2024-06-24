const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/index");
app.use(cors());  // since backend and frontend are on differnt port 
app.use(express.json());// to get the the body parameters 
app.use("/api/v1", mainRouter);// to transfer the on them on differnt route
app.listen(3001);

// /api/v1/user/signin
// /api/v1/user/signup
// /api/v1/user/changePassword....

//   /api/v1/account/transferMoney
//   /api/v1/account/balance
