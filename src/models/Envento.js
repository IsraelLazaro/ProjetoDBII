const sequelize = require('../dataBase/db');
const {DataTypes} = require('sequelize');
const Evento = sequelize.define('Evento', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    nomeEvento:{
        type: DataTypes.STRING,
        allowNull: false
        },
    dataInicio:{
        type: DataTypes.STRING
        },
    descricao:{
        type: DataTypes.STRING
        },
    localizacao:{
        type: DataTypes.GEOMETRY
        }
    });
module.exports = Evento;