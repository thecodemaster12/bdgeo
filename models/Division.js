import mongoose from "mongoose";

const upazilaSchema = new mongoose.Schema({
  id: Number,
  name: String,
  bengaliName: String,
});

const districtSchema = new mongoose.Schema({
  id: Number,
  name: String,
  bengaliName: String,
  upazilas: [upazilaSchema],
});

const divisionSchema = new mongoose.Schema({
  id: Number,
  name: String,
  bengaliName: String,
  districts: [districtSchema],
});

const Division = mongoose.model("Division", divisionSchema);

export default Division;