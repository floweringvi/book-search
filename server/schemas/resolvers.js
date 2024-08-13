const { User } = require('../models');


const resolvers ={
    Query: {
        users: async () => {
            return User.find({});
        },
        user: async (parent, {_id}) => {
            return User.findOne({_id}).populate('savedBooks')
        }
    }
}

module.exports = resolvers; 