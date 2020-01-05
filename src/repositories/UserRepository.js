const User = require('../models/User');

module.exports = {
    async getByKey(id) {
        return await User.findOne({ _id: id });
    },

    async getAll() {
        return await User.find();
    },

    async getGetby(page, qtdPerPage) {
        
    },

    async add(user) {
        return await User.create(user);
    },

    async update(user) {
        return User.updateOne(user);
    },

    async delete(user) {
        return User.deleteOne(user);
    }
};