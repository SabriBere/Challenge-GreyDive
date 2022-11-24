const { Cliente } = require("../models")


class clientesService {

    static async allQuestions() {
        try {
            const { count, rows } = await Cliente.findAndCountAll({});
            if (!count) return { error: true, data: 'List is empty' };
            return { error: false, data: { count, rows } };
        } catch (error) {
            return { error: true, data: error.message };
        }
    
    }
}

//modificar para que tariga por id según elección
module.exports = clientesService