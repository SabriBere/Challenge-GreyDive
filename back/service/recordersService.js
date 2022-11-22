const { Recorders } = require("../models")


class recordersService {

    static async createRecords(body) {
    try {
      const createdRecord = await Recorders.create(body)
      if(!createdRecord.id) return {error: true, data: "Hubo un problema"}
      return {error: false, data: {createdRecord, message: "Se creo correctamente en la db"}}
    } catch (error) {
        return {error: true, data: error.message}
    }    
         
    }
}

module.exports = recordersService