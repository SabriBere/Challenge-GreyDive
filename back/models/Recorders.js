const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Recorders extends Model {}

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
},
    {
        sequelize: db,
        modelName: "recorders",
    });



module.exports = Recorders