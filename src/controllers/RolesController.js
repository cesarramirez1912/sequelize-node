const { roles } = require("../models");

module.exports = {

  async store(req, res) {
    const { description } = req.body;
    try {
      const roleCreated = await roles.create({ description });
      return res.json(roleCreated);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const allRoles = await roles.findAll();
      return res.json(allRoles);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
