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
    urlVideo: {
        type: DataTypes.TEXT
    },
    transcription: {
        type: DataTypes.STRING
    },
    task:{
        type: DataTypes.TEXT
    }
},
    {
        sequelize: db,
        modelName: "recorders",
    });



module.exports = Recorders