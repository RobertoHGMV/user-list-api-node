const { validationResult } = require('express-validator');

const UserService = require('../services/UserService');

module.exports = {
    async getByKey(req, res) {
        try {
            const { id } = res.params;

            return await UserService.getByKey(id);
        }
        catch(e) {
            return res.status(500).json(e);
        }
    },

    async getAll(req, res) {
        try {
            return await UserService.getAll();
        }
        catch(e) {
            return res.status(500).json(e);
        }
    },

    async add(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty())
                return res.status(500).send({ errors: errors.array() });
            
            const { FirstName, LastName } = req.body;

            return UserService.add(FirstName, LastName);
        }
        catch(e) {
            return res.status(500).send(e);
        }
    },

    async update(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty())
                return res.status(500).send({ errors: errors.array() });

            const { Id, FirstName, LastName } = req.body;

            const user = await UserService.update(Id, FirstName, LastName);

            return res.status(200).json(user);
        }
        catch(e) {
            return res.status(500).send(e);
        }
    },

    async delete(req, res) {
        try {
            const id = req.params;

            await UserService.delete(id);

            return res.send(204).json({ msg: 'Operação realizada com sucesso' });
        }
        catch(e) {
            return res.status(500).send(e);
        }
    }
};