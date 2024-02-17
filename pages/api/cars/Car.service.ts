
import { CarCreateDTO, CarDTO } from './Car.DTO';
import { CarRepository } from './Car.repository';

export class CarService {
  private readonly carRepository: CarRepository

  constructor() {
    this.carRepository = new CarRepository()
  }

  public async findMany():Promise<CarDTO[]> {
    return this.carRepository.findMany()  
  }

  public async findCarById(id:number):Promise<CarDTO> {
    return this.carRepository.findCarById(id)  
  }
  
  public async addCar(data:CarCreateDTO):Promise<CarDTO> {
    return this.carRepository.addCar(data)  
  }
  public async updateCar(data:CarCreateDTO, id:number):Promise<CarDTO> {
        // console.log(data)
        // console.log(id)
    return this.carRepository.updateCar(data, id)  
  } 

  public async deleteCar( id:number):Promise<CarDTO> {
  
    return this.carRepository.deleteCar(id)  
} 


  
}