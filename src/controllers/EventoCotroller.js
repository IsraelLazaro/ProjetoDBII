const Evento = require('../models/Envento');
const salvarEvento = async (req, res)=>{
    try{
        const obj = {
            nomeEvento: req.body.nomeEvento,
            dataInicio: req.body.dataInicio,
            descricao: req.body.descricao,
            localizacao:{
                type: 'Point',
                coordinates: [req.body.lng, req.body.lat]
            }
            };
        const evento = await Evento.create(obj);
            if(evento!=null){
                res.status(400).send('Evento Salvo com sucesso!!');
                }
            }catch(err){
                console.log(err);
                res.status(400).send('Erro ao salvar evento!!');
                };
    };
const listarEventos = async (req, res)=>{
    const eventos = await Evento.findAll({});
    res.status(200).send(eventos);
    };
const sincronizar = async (req, res)=>{
    await Evento.sync();
    res.status(200).send('Sicronização realizada com sucesso!!');
    };
module.exports = {sincronizar, listarEventos, salvarEvento};