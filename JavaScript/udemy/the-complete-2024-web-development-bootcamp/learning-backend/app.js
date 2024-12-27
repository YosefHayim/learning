const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const limiter = require("./middlewares/rateLimit");
const errorHandler = require("./middlewares/errorHandler");
const undefinedRoute = require("./middlewares/undefinedRoutes");
const connectDb = require("./config/connectDb");
const userRoute = require("./routes/userRoute");

const app = express();
const PORT = process.env.PORT || 3000;
connectDb();

app.use(
  cors({
    origin: "http://localhost:3000",
    withCredentials: true,
  })
);
app.use(express.json());
app.use(morgan("tiny"));
app.use(limiter);

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    response: `Welcome to the robust server`,
  });
  next();
});

app.use("/api/user", userRoute);

app.all("*", undefinedRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
