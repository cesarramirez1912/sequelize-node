const { Role } = require("../models");

module.exports = {
  
  async store(req, res) {
    const { description} = req.body;
    try {
      const role = await Role.create({
        description,
      });
      return res.json(role);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const roles = await Role.findAll();
      return res.json(roles);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
