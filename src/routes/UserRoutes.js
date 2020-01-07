const { check } = require('express-validator');

const UserController = require('../controllers/UserController');

module.exports = {
    addRoutes(routes) {
        routes.get('/v1/users/:id');

        routes.get('/v1/users');

        routes.post('/v1/users', 
        check('First').isLength({ min: 3 }).withMessage('Primeiro nome deve ter mais que 3 caracteres'),
        check('LastName').isLength({ min: 3 }).withMessage('Último nome deve ter mais que 3 caracteres'),
        UserController.add);

        routes.put('/v1/users', 
        check('First').isLength({ min: 3 }).withMessage('Primeiro nome deve ter mais que 3 caracteres'),
        check('LastName').isLength({ min: 3 }).withMessage('Último nome deve ter mais que 3 caracteres'),
        UserController.add);

        routes.delete('/v1/users/:id');
    }
};