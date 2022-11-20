const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Questions extends Model { }


Questions.init({
    
    tipoTarea: {
        type: DataTypes.INTEGER
    },
    texto: {
        type: DataTypes.TEXT
    }
},
    {
        sequelize: db,
        modelName: "questions",
    });



module.exports = Questions