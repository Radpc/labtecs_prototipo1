const mongoose = require("mongoose");
const valueSet = mongoose.model("valueSet");

exports.list_all_valueSets = (req, res) => {
  valueSet.find({}, (err, valueSets) => {
    if (err) res.send(err);
    res.json(valueSets);
  });
};

exports.create_a_valueSet = (req, res) => {
  const newValueSet = new valueSet(req.body);
  newValueSet.save((err, valueSet) => {
    if (err) res.send(err);
    res.json(valueSet);
    console.log("Adicionado!" + valueSet);
  });
};

exports.read_a_valueSet = (req, res) => {
  valueSet.findById(req.params.valueSetId, (err, valueSet) => {
    if (err) res.send(err);
    res.json(valueSet);
  });
};

exports.update_a_valueSet = (req, res) => {
  valueSet.findOneAndUpdate(
    { _id: req.params.valueSetId },
    req.body,
    { new: true },
    (err, valueSet) => {
      if (err) res.send(err);
      res.json(valueSet);
    }
  );
};

exports.delete_a_valueSet = (req, res) => {
  valueSet.deleteOne({ _id: req.params.valueSetId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "valueset successfully deleted",
      _id: req.params.valueSetId,
    });
  });
};
