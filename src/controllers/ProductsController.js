
const { products } = require("../models");

module.exports = {

    async store(req, res) {
        const { description } = req.body;
        try {
            const productCreated = await products.create({ description });
            return res.json(productCreated);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    async getAll(req, res) {
        try {
            const allProducts = await products.findAll();
            return res.json(allProducts);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },


};
