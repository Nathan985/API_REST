const mongoose = require('mongoose');

const Notes = mongoose.model('Notes');

function isNullOrWhitespace(field) {
    return !field
}

let success = 0;

exports.createdNote = async (req, res, next) => {

    if(isNullOrWhitespace(req.body.title)){
        return res.status(500).send({
            success,
            data: "Invalid Title"
        })
    }
    if(isNullOrWhitespace(req.body.id_user)){
        return res.status(500).send({
            success,
            data: "User must be logged in"
        })
    }

    const note = await Notes.create(req.body);

    return res.status(200).send({
        success: 1,
        data: note
    })
}

exports.updateNotes = async (req, res, next) => {

    if(isNullOrWhitespace(req.body.title)){
        return res.status(500).send({
            success,
            data: "Invalid Title"
        })
    }

    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
    return res.status(200).send({
        success:  1,
        data: note
    })
}

exports.getAllNotes = async (req, res, next) => {

    const { page = 1 } = req.query;
    
    const note = await Notes.paginate({}, {page, limit: 10})

    return res.status(200).send({
        success: 1,
        data: note
    })
}

exports.deleteNote = async (req, res, next) => {

    await Notes.findByIdAndDelete(req.params.id);
    return res.status(200).send({
        success: 1,
        data: "The note has been deleted"
    })

}