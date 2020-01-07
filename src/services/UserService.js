const UserRepository = require('../repositories/UserRepository');

module.exports = {
    async getByKey(id) {
        return await UserRepository.getByKey(id);
    },

    async getByFirstName(firstName) {
        return await UserRepository.getByFirstName(firstName);
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

    async update(id, firstName, lastName) {
        const user = await this.get(id);

        if (!user)
            throw { error: `Usuário com código ${id} não encontrado` };

        await UserRepository.update({ _id: id, firstName, lastName });

        return this.get(id);
    },

    async delete(id) {
        const user = await this.get(id);

        if (!user)
            throw { error: `Usuário com código ${id} não encontrado` };

        await UserRepository.delete(user);
    }
};