const { company, clients } = require("../models");

module.exports = {

  async store(req, res) {
    const { id_company, description, location, phone } = req.body;
    try {
      const clientCreated = await clients.create({ id_company, description, location, phone });
      return res.json(clientCreated);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

  async getAll(req, res) {
    try {
      const allClients = await clients.findAll(
        {
          include: [company],
        }
      );
      return res.json(allClients);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  },

};
