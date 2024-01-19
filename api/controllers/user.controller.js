import userServices from "../services/user.service.js";

const userService = new userServices();
export default class userControllers {
  async getUser(req, res) {
    const payload = req.payload;
    try {
      const data = await userService.getUser(payload.userId);
      if(data){
        console.log(data);
        return res.status(200).json(data[0])
      }
      return res.status(401).json('Data provided invalid!')
    } catch (error) {
      throw new Error(error);
    }
  }
}
