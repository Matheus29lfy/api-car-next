import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";
import { CarController } from "./Car.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const carController =  new CarController()

  
  
  try {
    // if (!Array.isArray(sampleUserData)) {
    //   throw new Error("Cannot find user data");
    // }

    if(req.method === 'POST'){

      if(req.url === '/api/cars'){

        const message = await carController.addCar(req)
        return  res.status(200).json(message)
      }

    }

    if(req.method === 'GET'){
      if(req.url === '/api/cars'){
           const allCars = await carController.findMany()
           res.status(200).json(allCars)
      }

     //Não encontrei uma forma de criar uma rota específica
  //     if(req.url === '/api/cars'){
  //       const allCars = await carController.findCarById(req)
  //       res.status(200).json(allCars)
  //  }

    }
 
    if(req.method === 'PUT'){

        const message = await carController.updateCar(req)
        return  res.status(200).json(message)
    }

    
    if(req.method === 'DELETE'){

        const message = await carController.deleteCar(req)
        return  res.status(200).json(message)
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
