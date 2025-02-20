import express from "express";
const api = express.Router();
import Division from "../models/Division.js";

  // Get all the divisions
  api.get("/divisions", async (req, res) => {
    try {
      const divisions = await Division.find({});
      const allDivisions = divisions.map((division) => ({
        id: division.id,
        name: division.name,
        bengaliName: division.bengaliName,
      }));
      res.status(200).json(allDivisions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get all the districts
  api.get("/districts", async (req, res) => {
    try {
      const divisions = await Division.find({});
      const allDistricts = divisions.flatMap((division) =>
        division.districts.map((district) => ({
          id: district.id,
          name: district.name,
          bengaliName: district.bengaliName,
        }))
      );
      res.status(200).json(allDistricts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get all the upazilas
  api.get("/upazilas", async (req, res) => {
    try {
      const divisions = await Division.find({});
  
      const allUpazilas = divisions
        .map((division) =>
          division.districts.flatMap((district) =>
            district.upazilas.map((upazila) => ({
              id: upazila.id,
              name: upazila.name,
              bengaliName: upazila.bengaliName,
            }))
          )
        )
        .flat();
      res.status(200).json(allUpazilas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get districts of a division
  api.get("/division/:division_name", async (req, res) => {
    const divisionName =
      req.params.division_name.charAt(0).toUpperCase() +
      req.params.division_name.slice(1).toLowerCase();
    try {
      const divisions = await Division.find({});
      const division = divisions.find(
        (division) =>
          division.name === divisionName || division.bengaliName === divisionName
      );
      res.status(200).json(division.districts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get upazila of a district
  api.get("/district/:district_name", async (req, res) => {
    const districtName =
      req.params.district_name.charAt(0).toUpperCase() +
      req.params.district_name.slice(1).toLowerCase();
  
    try {
      const divisions = await Division.find({});
      for (const division of divisions) {
        const district = division.districts.find(
          (dis) => dis.name === districtName || dis.bengaliName === districtName
        );
  
        if (district) {
          return res.json(district.upazilas);
        }
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default api;