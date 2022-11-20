const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Recorders extends Model { }


Recorders.init({
    client: {
        type: DataTypes.STRING,
    },
    transcription: {
        type: DataTypes.TEXT
    },
    opinionScale5:{
        type: DataTypes.INTEGER
    },
    urlVideo: {
        type: DataTypes.TEXT
    },
    transcription: {
        type: DataTypes.STRING
    },
    //la tarea saldría del modelo questions
    tipoTarea:{
        type: DataTypes.TEXT
    },
    //tiempo en que tardó el usuario en dar la respuesta
    time:{
        type: DataTypes.TIME
    }
},
    {
        sequelize: db,
        modelName: "recorders",
    });



module.exports = Recorders