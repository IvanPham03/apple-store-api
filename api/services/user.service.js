import User from "../models/user.model.js";
export default class userServices{
    async getUser(id){
        try {
            return await User.find({_id: id})
        } catch (error) {
            throw new Error(error)
        }
    }
}