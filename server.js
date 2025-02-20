import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import api from "./routes/api.js";

// const upazilaSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   bengaliName: String,
// });

// const districtSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   bengaliName: String,
//   upazilas: [upazilaSchema],
// });

// const divisionSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   bengaliName: String,
//   districts: [districtSchema],
// });

// const Division = mongoose.model("Division", divisionSchema);
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

app.use("/api", api);



app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
