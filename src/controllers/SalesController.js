const { company, clients, sales } = require("../models");


module.exports = {
  async store(req, res) {
    const { id_client, id_company, date, table } = req.body;
    try {
      const saleCreated = await sales.create({ id_client, id_company, date, table });
      return res.json(saleCreated);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const allSales = await sales.findAll({
        include: [
          {
            model: company,
          }, {
            model: clients,
          }]
      });
      return res.json(allSales);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
