const User = require('../models/User');

module.exports = {
    async getByKey(id) {
        return await User.findOne({ _id: id });
    },

    async getAll() {
        return await User.find();
    },

    async getBy(page, qtdPerPage) {
        return await User.paginate({}, { page, limit: qtdPerPage });
    },

    async getByFirstName(firstName) {
        return await User.findOne({ firstName: firstName });
    },

    async add(user) {
        return await User.create(user);
    },

    async update(user) {
        await User.findByIdAndUpdate(user._id, user);
    },

    async delete(user) {
        await User.deleteOne(user);
    }
};