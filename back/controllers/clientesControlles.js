const clientesService = require("../service/clientesService")

class clientesControllers {
    static async allQuestions(req, res) {
      const { error, data } = await clientesService.allQuestions(req, res)
        if (error) return res.status(400).json({ data })
        res.status(200).json({ data })
    }
  }
  
  module.exports = clientesControllers;