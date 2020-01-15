const UserRepository = require('../repositories/UserRepository');

module.exports = {
    async getByKey(id) {
        return await UserRepository.getByKey(id);
    },

    async getByFirstName(firstName) {
        return await UserRepository.getByFirstName(firstName);
    },

    async getBy(page, qtdPerPage) {
        return await UserRepository.getBy(page, qtdPerPage);
    },

    async getAll() {
        return await UserRepository.getAll();
    },

    async add(firstName, lastName) {
        const user = await this.getByFirstName(firstName);
        
        if (user)
            throw { error: `Usuário com nome ${firstName} já cadastrado` };
            
        return await UserRepository.add({ firstName, lastName });
    },

    async update(user_id, firstName, lastName) {
        const user = await this.getByKey(user_id);

        if (!user)
            throw { error: `Usuário com código ${id} não encontrado` };
        
        await UserRepository.update({ _id: user_id, firstName, lastName });
        
        return await this.getByKey(user_id);
    },

    async delete(id) {
        const user = await this.getByKey(id);

        if (!user)
            throw { error: `Usuário com código ${id} não encontrado` };

        await UserRepository.delete(user);
    }
};