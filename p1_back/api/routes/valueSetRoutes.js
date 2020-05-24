const valueSetBuilder = require("../controllers/valueSetController");

module.exports = (app) => {
  app
    .route("/valueset")
    .get(valueSetBuilder.list_all_valueSets)
    .post(valueSetBuilder.create_a_valueSet);

  app
    .route("/valueset/:valueSetId")
    .get(valueSetBuilder.read_a_valueSet)
    .put(valueSetBuilder.update_a_valueSet)
    .delete(valueSetBuilder.delete_a_valueSet);
};
