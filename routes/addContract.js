const express = require("express");
const userModel = require("../models/User");
const contractModel = require("../models/Contracts");
const app = express();

app.post("/add_contract", async (request, response) => {
  const contract = new contractModel(request.body);

  try {
    await contract.save();
    response.send(contract);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/contracts", async (request, response) => {
  const contracts = await contractModel.find({});

  try {
    response.send(contracts);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
