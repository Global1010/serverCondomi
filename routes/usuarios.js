const { Router } = require('express');
const { usuariosGet, usuarioPost, usuariosPut, usuarioPatch, usuarioDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);
router.put('/:ci', usuariosPut);
router.post('/', usuarioPost );
router.patch('/', usuarioPatch);
router.delete('/', usuarioDelete);

  module.exports = router;