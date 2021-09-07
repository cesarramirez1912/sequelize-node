const { company, users } = require("../models");


module.exports = {

  async store(req, res) {
    const { description, email, phone, tables } = req.body;
    try {
      const companyCreate = await company.create({
        description,
        email,
        phone,
        tables,
      });
      return res.json(companyCreate);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const companies = await company.findAll({
        include: [
          {
            model: users,
            as: 'users',
          }]
      });
      return res.json(companies);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
