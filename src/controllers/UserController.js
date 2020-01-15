const { validationResult } = require('express-validator');

const UserService = require('../services/UserService');

module.exports = {
    async getByKey(req, res) {
        try {
            const { id } = req.params;
            
            const user = await UserService.getByKey(id);
            
            return res.status(200).json(user);
        }
        catch(e) {
            return res.status(500).json(e);
        }
    },

    async getBy(req, res) {
        try {
            const { page, qtdPerPage } = req.params;

            const users = await UserService.getBy(page, qtdPerPage);

            return res.status(200).json({ docs: users });
        }
        catch(e) {
            return res.status(500).send(e);
        }
    },

    async getAll(req, res) {
        try {
            const users = await UserService.getAll();

            return res.status(200).json({ docs: users });
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
            
            const { firstName, lastName } = req.body;

            const user = await UserService.add(firstName, lastName);
            
            return res.status(201).json(user);
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

            const { id, firstName, lastName } = req.body;
            
            const user = await UserService.update(id, firstName, lastName);
            
            return res.status(200).json(user);
        }
        catch(e) {
            return res.status(500).send(e);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            
            await UserService.delete(id);

            return res.sendStatus(204);
        }
        catch(e) {
            return res.status(500).send(e);
        }
    }
};