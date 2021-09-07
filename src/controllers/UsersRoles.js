const { users_roles } = require("../models");

module.exports = {

  async store(req, res) {
    const { id_user, id_role } = req.body;
    try {
      const roleCreated = await users_roles.create({ id_user, id_role });
      return res.json(roleCreated);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const allRoles = await users_roles.findAll();
      return res.json(allRoles);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
