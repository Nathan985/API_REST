const mongoose = require('mongoose');

const Prodcut = mongoose.model('Product');


exports.getProducts = async (req, res, next) => {

    const { page = 1 } = req.query;
    const products = await Prodcut.paginate({}, { page, limit: 10 });
    return res.status(200).send({
        success: 1,
        data: products
    });

}

exports.createProduct = async (req, res, next) => {

    const product = await Prodcut.create(req.body);
    return res.status(200).send({
        success: 1,
        data: product
    })

}

exports.selectProduct = async (req, res, next) => {

    const product = await Prodcut.findById(req.params.id);

    return res.status(200).send({
        success: 1,
        data: product
    })
}

exports.updateProduct = async (req, res, next) => {

    const product = await Prodcut.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.status(200).send({
        success: 1,
        data: product
    })
}

exports.deleteProduct = async (req, res, next) => {

    await Prodcut.findByIdAndRemove(req.params.id);

    return res.status(200).send({
        success: 1,
        data: "Produto Removido!"
    })
}