const { Questions} = require("../models")


class questionsService {

    // static async newTournament(body, file) {
    //     const { name, description } = body
    //     try {
    //         const tournamentFind = await Tournament.findOne({ where: { name } })
    //         if (tournamentFind) return { error: true, data: "Este torneo ya se encuentra creado" }

    //         await Tournament.create({ name, description, profilePicture: file.path })
    //         return { error: false, data: "Torneo creado" }

    //     } catch (error) {
    //         return { error: true, data: error.message }
    //     }
    // }
}

module.exports = questionsService