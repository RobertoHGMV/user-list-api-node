const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String
}, {
    toJSON: {
        virtuals: true
    }
});

UserSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

mongoose.set('useFindAndModify', false);
UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', UserSchema);