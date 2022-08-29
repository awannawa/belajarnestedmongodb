const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

// Create Schema and Model
const reqString = {
  type: String,
  required: true,
};

const DokterSchema = new Schema(
  {
    namaDokter: reqString,
    jamPraktek: reqString,
  },
  { timestamps: true }
);

const KlinikSchema = new Schema({
  klinik: reqString,
  jadwal: [DokterSchema],
});

module.exports = mongoose.model("Jadwal", KlinikSchema);
