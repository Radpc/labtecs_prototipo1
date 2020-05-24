const mongoose = require("mongoose");

const { Schema } = mongoose;

const valueSetSchema = new Schema({
  a: {
    type: Number,
    min: [1, "Valor inferior ao mínimo (0)"],
    max: [10, "Valor superior ao máximo (10)"],
    required: true,
  },
  b: {
    type: Number,
    min: [1, "Valor inferior ao mínimo (0)"],
    max: [10, "Valor superior ao máximo (10)"],
    required: true,
  },
  c: {
    type: Number,
    min: [1, "Valor inferior ao mínimo (0)"],
    max: [10, "Valor superior ao máximo (10)"],
    required: true,
  },
  d: {
    type: Number,
    min: [1, "Valor inferior ao mínimo (0)"],
    max: [10, "Valor superior ao máximo (10)"],
    required: true,
  },
  e: {
    type: Number,
    min: [1, "Valor inferior ao mínimo (0)"],
    max: [10, "Valor superior ao máximo (10)"],
    required: true,
  },
});

module.exports = mongoose.model("valueSet", valueSetSchema);
