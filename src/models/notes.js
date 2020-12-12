const moongose = require('mongoose');
const moongosePaginate = require('mongoose-paginate');

const UserSchema = new moongose.Schema({
    id_user: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

UserSchema.plugin(moongosePaginate);

moongose.model('Notes', UserSchema);