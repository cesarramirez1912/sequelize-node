
const { users, company } = require("../models");

module.exports = {

    async store(req, res) {
        const { id_company, description, email, phone } = req.body;
        try {
            const user = await users.create({ id_company, description, email, phone });
            return res.json(user);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    async getAll(req, res) {
        try {
            const allUsers = await users.findAll({
                include: [
                    {
                        model: company,
                    }]
            }
            );

            return res.json(allUsers);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const userById = await users.findAll({
                where: {
                    id: id
                }
            });
            return res.json(userById);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

};
