const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', UserSchema);