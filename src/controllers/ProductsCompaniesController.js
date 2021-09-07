
const { sizes, products_sub_categories, products_companies, company, products } = require("../models");

module.exports = {

    async store(req, res) {
        const { id_company, id_product_sub_category, description, id_size, price, available } = req.body;
        try {
            const productCompanyCreated = await products_companies.create({ id_company, id_product_sub_category, description, id_size, price, available });
            return res.json(productCompanyCreated);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    async getAll(req, res) {
        try {
            const allProductsCompanies = await products_companies.findAll(
                {
                    attributes: ['id', 'description', 'price', 'available'],
                    include: [
                        {
                            model: company,
                            attributes: ['id', 'description'],
                        },
                        {
                            attributes: ['id'],
                            model: products_sub_categories,
                            include: [{
                                model: products,
                                attributes: ['id', 'description'],
                            }]
                        },
                        {
                            model: sizes,
                            attributes: ['id', 'description'],
                        }],
                }
            );
            return res.json(allProductsCompanies);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    async getById(req, res) {
        const { id } = req.params;
        try {
            const productsFromCompany = await products_companies.findAll(
                {
                    attributes: ['id', 'description', 'price', 'available'],
                    where: {
                        id_company: id
                    },
                    include: [
                        {
                            attributes: ['id'],
                            model: products_sub_categories,
                            include: [{
                                model: products,
                                attributes: ['id', 'description'],
                            }]
                        },
                        {
                            model: sizes,
                            attributes: ['id', 'description'],
                        }],
                }
            );
            return res.json(productsFromCompany);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

};
