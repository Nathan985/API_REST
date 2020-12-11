const mongoose = require('mongoose');

const User = mongoose.model('User');


exports.getUsers = async (req, res, next) => {

    const { page = 1 } = req.query;
    const users = await User.paginate({}, { page, limit: 10 });
    return res.status(200).send({
        success: 1,
        data: users
    });

}

exports.createUser = async (req, res, next) => {

    const user = await User.create(req.body);
    return res.status(200).send({
        success: 1,
        data: user
    })

}

exports.update = async (req, res, next) => {

    const user = await User.findOneAndUpdate(req.params.id, req.body, {new: true});
    return res.status(200).send({
        success: 1,
        data: user
    })

}

exports.getUser = async (req, res, next) => {

    const user = await  User.findById(req.params.id);
    return res.status(200).send({
        success: 1,
        data: user
    })
}

exports.deleteUser = async (req, res, next) => {

    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({
        success: 1,
        data: "Usuario Deletado"
    })

}

exports.loginUser = async (req, res, next) => {

    const user = await User.find({email:req.body.email, password: req.body.password}, {});
    let success = 0;
    if(user[0]){
        success = 1;
    }
    return res.status(200).send({
        success,
        data: user
    })
}