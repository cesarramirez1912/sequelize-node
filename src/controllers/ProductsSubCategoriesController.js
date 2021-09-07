
const { products, sub_categories, products_sub_categories } = require("../models");

module.exports = {

    async store(req, res) {
        const { id_product, id_sub_category } = req.body;
        try {
            const productSubCategoriesCreated = await products_sub_categories.create({ id_product, id_sub_category });
            return res.json(productSubCategoriesCreated);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    async getAll(req, res) {
        try {
            const allProductsSubCategories = await products_sub_categories.findAll(
                {
                    attributes: ['id'],
                    include: [
                        {
                            model: sub_categories,
                            attributes: ['id', 'description'],

                        },
                        {
                            model: products,
                            attributes: ['id', 'description'],
                        }],
                }
            );
            return res.json(allProductsSubCategories);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

};
