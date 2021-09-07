const { sub_categories, categories } = require("../models");

module.exports = {

  async store(req, res) {
    const { id_category, description } = req.body;
    try {
      const categorySubCreated = await sub_categories.create({ id_category, description });
      return res.json(categorySubCreated);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const allSubCategories = await sub_categories.findAll(
        {
          include: [
            {
              model: categories,
              attributes: ['id', 'description'],
            }],
          attributes: ['id', 'description'],
        }
      );
      return res.json(allSubCategories);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
