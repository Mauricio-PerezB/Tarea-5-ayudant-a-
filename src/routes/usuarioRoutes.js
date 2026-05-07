/**
 * Rutas de Usuarios
 * Aquí definimos los endpoints relacionados con usuarios
 */

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.crearUsuario);

router.get('/', usuarioController.obtenerTodosLosUsuarios);


router.get('/:id', usuarioController.obtenerUsuarioPorId);


router.patch('/:id', usuarioController.actualizarUsuario);

module.exports = router;