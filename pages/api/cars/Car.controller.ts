import { NextApiRequest, NextApiResponse } from 'next';
import { CarService } from './Car.service';
import { CarDTO } from './Car.DTO';
// import { carDto } from '../dtos/carDto';


export class CarController {
  private readonly carCarService: CarService
  
  constructor() {
    this.carCarService = new CarService()
  }

  public async findMany():Promise<CarDTO[]> {
    return this.carCarService.findMany()  
  }

  public async findCarById(req: NextApiRequest):Promise<CarDTO> {
    const { id } = req.body

    return this.carCarService.findCarById(Number(id))  
  }
  public async addCar(req: NextApiRequest):Promise<CarDTO> {
    const { model, automaker, yearManufacture } = req.body as CarDTO;
    return this.carCarService.addCar({model, automaker, yearManufacture })
  }

  public async updateCar(req: NextApiRequest):Promise<CarDTO> {
    const { model, automaker, yearManufacture } = req.body as CarDTO;
    const { id } = req.query

    console.log(id)
    return this.carCarService.updateCar(
                { model,
                  automaker, 
                  yearManufacture},
                Number(id)
           )
  }
  public async deleteCar(req: NextApiRequest):Promise<CarDTO> {
    const { id } = req.query
    return this.carCarService.deleteCar(Number(id))
  } 
}
