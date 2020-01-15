const { check } = require('express-validator');

const UserController = require('../controllers/UserController');

module.exports = {
    addRoutes(routes) {
        routes.get('/v1/users/:id', UserController.getByKey);

        routes.get('/v1/users', UserController.getAll);

        routes.get('/v1/users/:qtd/:qtdPerPage', UserController.getBy);

        routes.post('/v1/users', 
        check('firstName').isLength({ min: 3 }).withMessage('Primeiro nome deve ter mais que 3 caracteres'),
        check('lastName').isLength({ min: 3 }).withMessage('Último nome deve ter mais que 3 caracteres'),
        UserController.add);

        routes.put('/v1/users', 
        check('firstName').isLength({ min: 3 }).withMessage('Primeiro nome deve ter mais que 3 caracteres'),
        check('lastName').isLength({ min: 3 }).withMessage('Último nome deve ter mais que 3 caracteres'),
        UserController.update);

        routes.delete('/v1/users/:id', UserController.delete);
    }
};