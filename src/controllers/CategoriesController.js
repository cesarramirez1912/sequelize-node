const { categories } = require("../models");

module.exports = {

  async store(req, res) {
    const { description } = req.body;
    try {
      const categoryCreated = await categories.create({ description });
      return res.json(categoryCreated);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const allCategories = await categories.findAll();
      return res.json(allCategories);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
