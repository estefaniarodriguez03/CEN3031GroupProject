import express from "express";

//import Pet from "../models/Pet.js"

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("PetInfo");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
  /*const pets = await Pet.find({}); //can sort within this step!
  res.status(200).json(pets);*/
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("PetInfo");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
  /*const {id} = req.params
  const pet = await Pet.findById(id);
  if(!pet){
    return res.status(404).json(pet);
  }
  res.status(200).json(pet);*/
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    let newDocument = {
        name: req.body.name,
        breed: req.body.position,
        size: req.body.size,
        gender: req.body.gender,
        age: req.body.age,
        personality: req.body.personality,
    };
    //const{name, breed, gender, age, personality} = req.body;
    //const pet = await Pet.create(name, breed, gender, age, personality);
    let collection = await db.collection("PetInfo");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
    //res.status(204).json(pet);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        breed: req.body.breed,
        size: req.body.size,
        gender: req.body.gender,
        age: req.body.age,
        personality: req.body.personality,
      },
    };

    let collection = await db.collection("PetInfo");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("PetInfo");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;