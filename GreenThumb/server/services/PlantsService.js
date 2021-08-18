import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlantsService {
  async getAllPlants(query = {}) {
    const plants = await dbContext.Plants.find(query)
    return plants
  }

  async create(body) {
    await dbContext.Plants.create(body)
    return await this.getAllPlants()
  }
}

export const plantsService = new PlantsService()
