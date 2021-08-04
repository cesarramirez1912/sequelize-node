const { Company } = require("../models");

module.exports = {

  async store(req, res) {
    const { description, email, phone, tables } = req.body;
    try {
      const company = await Company.create({
        description,
        email,
        phone,
        tables,
      });
      return res.json(company);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const company = await Company.findAll();
      return res.json(company);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
