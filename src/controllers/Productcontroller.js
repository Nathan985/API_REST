const mongoose = require('mongoose');

const Prodcut = mongoose.model('Product');

module.exports = {

    async index(req, res) {
        const {page = 1}  = req.query;
        const products = await Prodcut.paginate({},{page, limit: 10});

        return res.json(products);
    },

    async sotre(req, res){
        const product = await Prodcut.create(req.body);
        return res.status(200).send({
            success: 1,
            data: product
        })
    },

    async show(req, res){
        const product = await Prodcut.findById(req.params.id);

        return res.status(200).send({
            success: 1,
            data: product
        })
    },

    async update(req, res){
        const product = await Prodcut.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.status(200).send({
            success: 1,
            data: product
        })
    },

    async destroy(req, res){
        await Prodcut.findByIdAndRemove(req.params.id);

        return res.status(200).send({
            success: 1,
            data: "Produto Removido!"
        })
    }
}