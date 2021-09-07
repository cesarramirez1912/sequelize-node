
const { sizes } = require("../models");

module.exports = {

    async store(req, res) {
        const { description } = req.body;
        try {
            const sizeCreated = await sizes.create({ description });
            return res.json(sizeCreated);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    async getAll(req, res) {
        try {
            const allSizes = await sizes.findAll();
            return res.json(allSizes);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },


};
