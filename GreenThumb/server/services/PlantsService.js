import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlantsService {
  async getAllPlants(query = {}) {
    const plants = await dbContext.Plants.find(query).populate
    return plants
  }

  async findById(id) {
    const plant = await dbContext.Plants.findById(id)
    if (!plant) {
      throw new BadRequest('Invalid Id')
    }
    return plant
  }
}

export const plantsService = new PlantsService()
