import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import api from "./routes/api.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const port = process.env.PORT || 3000;
const mongodb = process.env.MONGODB;

mongoose
  .connect(mongodb)
  .then(() => {
    console.log(`Connected`);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use("/api", api);



app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
