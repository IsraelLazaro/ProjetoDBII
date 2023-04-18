const express = require('express');
const Evento = require('../models/Envento');

const listarEventos = async (req, res)=>{
    const eventos = await Evento.findAll({});
    res.status(200).send(eventos);
};

const sincronizar = async (req, res)=>{
        await Evento.sync();
        res.status(200).send('Sicronização realizada com sucesso!!');
}

module.exports = {sincronizar, listarEventos};