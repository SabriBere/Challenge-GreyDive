const questionsService = require("../service/questionsService")

class questionsControllers {
    static async allQuestions(req, res) {
      const { error, data } = await questionsService.allQuestions(req, res)
        if (error) return res.status(400).json({ data })
        res.status(200).json({ data })
    }
  }
  
  module.exports = questionsControllers;