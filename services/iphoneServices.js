// Sử dụng service giúp giảm tải công việc của controller.
// Controller chỉ cần gọi các phương thức của service để thực hiện các nhiệm vụ cụ thểƒ

import iphone from "../models/iphone.js";

export default class iphoneServices {
  async getAllIphone() {
    try {
      const iphones = await iphone.find().limit(10);
      return iphones;
    } catch (error) {
      console.log(error);
      throw new Error("error from fetch data iphones");
    }
  }
  async getByID(id){
    try {
        const rs = await iphone.findById(id);
        if(!rs){
           throw new Error('iphone not found'); 
        }
        return rs;
    } catch (error) {
        throw new Error(error); 
    }
  }
  async insertTest() {
    const iphoneData = [
      {
        model: "iphone-14",
        img: "iphone14.jpg",
        name: "iPhone 14",
        price: 19990000,
        rate: 0,
        discount: 0,
        display: {
          size: 6.1,
          resolution: "1170 x 2532 pixels",
          type: "Super Retina XDR",
        },
        storage: 128,
        ram: 4,
        battery: {
          capacity: 3100,
          removable: false,
        },
        color: "Space Gray",
        camera: {
          rear: "12 MP, f/1.6",
          front: "12 MP, f/2.2",
        },
        connectivity: {
          wifi: true,
          bluetooth: true,
          nfc: true,
        },
        amount: 10,
      },
      {
        model: "iphone-14-pro",
        img: "iphone14pro.jpg",
        name: "iPhone 14 Pro",
        price: 29990000,
        rate: 0,
        discount: 0,
        display: {
          size: 6.7,
          resolution: "1284 x 2778 pixels",
          type: "Super Retina XDR Pro",
        },
        storage: 256,
        ram: 6,
        battery: {
          capacity: 4000,
          removable: false,
        },
        color: "Graphite",
        camera: {
          rear: "12 MP (wide), 12 MP (ultrawide), 12 MP (telephoto)",
          front: "12 MP, f/2.2",
        },
        connectivity: {
          wifi: true,
          bluetooth: true,
          nfc: true,
        },
        amount: 5,
      },
      {
        model: "iphone-14-pro-max",
        img: "iphone14promax.jpg",
        name: "iPhone 14 Pro Max",
        price: 34990000,
        rate: 0,
        discount: 0,
        display: {
          size: 6.9,
          resolution: "1440 x 3088 pixels",
          type: "Super Retina XDR Pro",
        },
        storage: 512,
        ram: 8,
        battery: {
          capacity: 4352,
          removable: false,
        },
        color: "Silver",
        camera: {
          rear: "12 MP (wide), 12 MP (ultrawide), 12 MP (telephoto)",
          front: "12 MP, f/2.2",
        },
        connectivity: {
          wifi: true,
          bluetooth: true,
          nfc: true,
        },
        amount: 3,
      },
      {
        model: "iphone-14-plus",
        img: "iphone14plus.jpg",
        name: "iPhone 14 Plus",
        price: 24990000,
        rate: 0,
        discount: 0,
        display: {
          size: 6.4,
          resolution: "1242 x 2688 pixels",
          type: "Super Retina XDR",
        },
        storage: 256,
        ram: 6,
        battery: {
          capacity: 3800,
          removable: false,
        },
        color: "Midnight Green",
        camera: {
          rear: "12 MP (wide), 12 MP (ultrawide)",
          front: "12 MP, f/2.2",
        },
        connectivity: {
          wifi: true,
          bluetooth: true,
          nfc: true,
        },
        amount: 7,
      },
    ];
    try {
      const rs = await iphone.insertMany(iphoneData);
      return "success";
    } catch (error) {
      console.log(error);
      throw new Error("error from fetch data iphones");
    }
  }
}
