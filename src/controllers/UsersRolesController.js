const { users_roles } = require("../models");

module.exports = {
  
  async store(req, res) {
    const { id_user,id_role} = req.body;
    try {
      const role = await users_roles.create({
        id_user,
        id_role
      });
      return res.json(role);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const users_role = await users_roles.findAll();
      return res.json(users_role);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
