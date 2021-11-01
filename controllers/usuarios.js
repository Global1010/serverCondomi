
const { response } = require('express');


const usuariosGet = (req, res = response ) => {

    const { q, nombre = 'No name', api} = req.query;
    res.json({
        msg: 'get api controlador',
        q, nombre, api
    });
}
const usuariosPut = (req, res = response) => {
    const ci = req.params.ci;
    res.json({
     msg: 'put API controller',
     ci
    });
}

const usuarioPost = (req, res = response) => {
    const { nombre, ci} = req.body;
    res.json({
     msg: 'Post API controller',
     nombre,
     ci
 });
}


const usuarioPatch = (req, res = response) => {
    res.json({
     msg: 'Patch API controller',
    });
 }
const usuarioDelete = (req, res = response) => {
    res.json({
     msg: 'Delete API controller',
    });
 }

module.exports = {
    usuariosGet,
    usuarioPost,
    usuariosPut,
    usuarioPatch,
    usuarioDelete
}