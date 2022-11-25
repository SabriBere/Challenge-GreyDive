const { Cliente } = require("../models");

class clientesService {
  static async allQuestions() {
    try {
      const { count, rows } = await Cliente.findAndCountAll({});
      if (!count) return { error: true, data: "List is empty" };
      return { error: false, data: { count, rows } };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async aboutClient(id) {
    try {
      const data = await Cliente.findByPk(id);
      if (!data) return { error: true, data: "Cliente no encontrado" };
      return { error: false, data: data };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = clientesService;
