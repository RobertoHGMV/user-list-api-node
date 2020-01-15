const { validationResult } = require('express-validator');

const UserService = require('../services/UserService');

module.exports = {
    async getByKey(req, res) {
        try {
            const { id } = req.params;
            
            const user = await UserService.getByKey(id);

            return res.status(200).json({ success: true, message: "Operação realizada com sucesso", docs: user });
        }
        catch(e) {
            return res.status(500).json({ success: false, message: e.message, docs: e });
        }
    },

    async getBy(req, res) {
        try {
            const { page, qtdPerPage } = req.params;

            const users = await UserService.getBy(page, qtdPerPage);
            
            return res.status(200).json({ success: true, message: "Operação realizada com sucesso", docs: users.docs });
        }
        catch(e) {
            return res.status(500).send({ success: false, message: e.message, docs: e });
        }
    },

    async getAll(req, res) {
        try {
            const users = await UserService.getAll();

            return res.status(200).json({ success: true, message: "Operação realizada com sucesso", docs: users });
        }
        catch(e) {
            return res.status(500).json({ success: false, message: e.message, docs: e });
        }
    },

    async add(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty())
                return res.status(500).send({ errors: errors.array() });
            
            const { FirstName, LastName } = req.body;
            
            const user = await UserService.add(FirstName, LastName);
            
            return res.status(201).json({ success: true, message: "Operação realizada com sucesso", docs: user });
        }
        catch(e) {
            return res.status(500).send({ success: false, message: e.message, docs: e });
        }
    },

    async update(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty())
                return res.status(500).send({ errors: errors.array() });
            
            const { Id, FirstName, LastName } = req.body;
            
            const user = await UserService.update(Id, FirstName, LastName);
            
            return res.status(200).json({ success: true, message: "Operação realizada com sucesso", docs: user });
        }
        catch(e) {
            return res.status(500).send({ success: false, message: e.message, docs: e });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            
            await UserService.delete(id);

            // return res.sendStatus(204);
            return res.status(204).send({ success: true, message: "Operação realizada com sucesso" });
        }
        catch(e) {
            return res.status(500).send({ success: false, message: e.message, docs: e });
        }
    }
};