const { Questions} = require("../models")


class questionsService {

    static async allQuestions() {
        try {
            const { count, rows } = await Questions.findAndCountAll({});
            if (!count) return { error: true, data: 'List is empty' };
            return { error: false, data: { count, rows } };
        } catch (error) {
            return { error: true, data: error.message };
        }
    
    }
}

module.exports = questionsService