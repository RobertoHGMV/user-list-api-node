const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    FirstName: String,
    LastName: String
}, {
    toJSON: {
        virtuals: true
    }
});

UserSchema.virtual('FullName').get(function() {
    return `${FirstName} ${LastName}`;
});

module.exports = mongoose.model('User', UserSchema);