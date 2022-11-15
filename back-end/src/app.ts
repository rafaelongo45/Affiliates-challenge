import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

import handleError from "./middlewares/errorHandler.js";
import transactionsRouter from "./routers/transactionsRouter.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(transactionsRouter);
app.use(handleError);

const port = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`);
});

export default app;
