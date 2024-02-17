import { PrismaClient } from '@prisma/client';
import { CarCreateDTO, CarDTO } from './Car.DTO';

export class CarRepository {
  private readonly db: PrismaClient


  constructor() {
    this.db = new PrismaClient()
  }

  public async findMany():Promise<CarDTO[]>{
    return this.db.car.findMany()  
  }

  
  public async findCarById(id:number):Promise<CarDTO>{
    return this.db.car.findUnique({where:{
      id
    }})  
  }

  public async addCar(data:CarCreateDTO):Promise<CarDTO> {

    try {
     return this.db.car.create({data})
    } catch (error) {
      throw new Error(`Error to insert data ${error}`);
    }    

  }

  public async updateCar(data:CarCreateDTO, id:number):Promise<CarDTO> {

    try {
     return this.db.car.update({ where: { id }, data })
    } catch (error) {
      throw new Error(`Error to insert data ${error}`);
    }

  }

  public async deleteCar(id:number):Promise<CarDTO> {

    try {
     return this.db.car.delete({ where: { id } })
    } catch (error) {
      throw new Error(`Error to insert data ${error}`);
    }

  }


  
}