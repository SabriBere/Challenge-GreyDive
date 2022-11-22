const recordersService = require("../service/recordersService")

class recordersControllers {
    static async createRecords(req, res) {
      // console.log(req.body, "entre a controllers")
      const { error, data } = await recordersService.createRecords(req.body)
        if (error) return res.status(400).json({ data })
        res.status(200).json({ data })
    }
  }
  
  module.exports = recordersControllers;