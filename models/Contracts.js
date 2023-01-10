const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  chain: {
    type: String,
    required: true,
  },
  documetation: {
    type: String,
  },
  abiJson: {
    type: String,
  },
  functions: {
    type: mongoose.Schema.Types.Mixed,
  },
});

const Contract = mongoose.model("Contract", ContractSchema);

module.exports = Contract;
