const moongose = require('mongoose');
const moongosePaginate = require('mongoose-paginate');

const UserSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

UserSchema.plugin(moongosePaginate);

moongose.model('User', UserSchema);