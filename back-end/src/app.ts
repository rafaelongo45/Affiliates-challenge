import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import express, { Request, Response } from "express";

import readFile from "./readFile.js";
import prisma from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: "./src/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/", upload.single("file"), async (req: Request, res: Response) => {
  try {
    const fileData = await readFile();
    fileData.forEach(async (transaction) => {
      await prisma.transactions.create({
        data: transaction,
      });
    });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

app.get("/transactions", async (req: Request, res: Response) => {
  try {
    const transactions = await prisma.transactions.findMany();
    return res.status(200).send(transactions);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

const port = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`);
});
