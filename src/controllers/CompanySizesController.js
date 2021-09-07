const { company, sub_categories, sizes, companies_sizes, categories } = require("../models");


module.exports = {
  async store(req, res) {
    const { id_sub_category, id_company, id_size, pieces, flavors } = req.body;
    try {
      const companiesSizesCreated = await companies_sizes.create({ id_sub_category, id_company, id_size, pieces, flavors });
      return res.json(companiesSizesCreated);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const companiesSizes = await companies_sizes.findAll({
        attributes: ['pieces', 'flavors'],
        include: [
          {
            model: sub_categories,
            attributes: ['id', 'id_category', 'description'],
            include: [{
              model: categories,
              attributes: ['id', 'description'],
            }]
          }, {
            model: sizes,
            attributes: ['id', 'description'],
          }, {
            model: company,
          }]
      });
      return res.json(companiesSizes);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
