const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.json("Hello");
  },
}
