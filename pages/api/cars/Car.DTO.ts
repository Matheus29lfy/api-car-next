export interface CarDTO {
  id: number
  model: string
  automaker: string
  yearManufacture: number
  createdAt: Date
  updatedAt: Date
}

export interface CarCreateDTO {
  model: string
  automaker: string
  yearManufacture: number
}