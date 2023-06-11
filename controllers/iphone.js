import iphone from "../models/iphone.js";
import iphoneServices from "../services/iphoneServices.js";

const iphoneService = new iphoneServices();
export default class iphoneControllers {
  // load data
  async getAllIphone(req, res, next) {
    try {
      let iphones = await iphoneService.getAllIphone();
      return res.json(iphones).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json("error controller fetching all iphone");
    }
  }

  // insert iphone
  // async addIphone(req, res) {
  //   try {
  //     let rs = await iphoneService.addIphone();
  //     return res.json(rs).status(200);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json("error controler fetching iphone by id");
  //   }
  // }
  //insert for test with multiple
  async insertTest(req, res) {
    try {
      let rs = await iphoneService.insertTest();
      return res.json(rs).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json("error controller inserting multiple iphone");
    }
  }

  //
  async getIphoneById(req, res) {
    try {
      let rs = await iphoneService.getByID(req.params.id);
      return res.json(rs).status(200);
    } catch (error) {
      console.log(error);
      throw new Error("error controller inserting multiple iphone");
    }
  }
}
