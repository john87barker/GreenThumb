import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class GardenPlantService {
  async getAllPlantsbyGardenId(id) {
    const gardenPlant = await dbContext.GardenPlant.find(id).populate('creator', 'name picture')
    return gardenPlant
  }

  async create(body) {
    const gardenPlant = await dbContext.GardenPlant.create(body)
    return await dbContext.GardenPlant.findById(gardenPlant.id).populate('creator', 'name picture').populate('garden').populate('plant')
  }

  async edit(body) {
    const gardenPlant = await dbContext.GardenPlant.findById(body.id)
    if (!body) { throw new BadRequest('Invalid GardenPlant') }
    if (body.creatorId.toString() !== body.creatorId) {
      throw new BadRequest('Invalid request')
    }
    const updategardenPlant = await dbContext.GardenPlant.findById(body.id, body, { new: true }).populate('creator', 'name picture').populate('garden').populate('plant')
    return updategardenPlant
  }

  // REVIEW The below delete is used to delete a plant
  async delete(id, userId) {
    const gardenPlant = await dbContext.GardenPlant.findById(id)
    if (!gardenPlant) { throw new BadRequest('Invalid GardenPlant') }
    if (gardenPlant.creatorId.toString() !== userId) {
      throw new BadRequest('Invalid request')
    }
    return await dbContext.GardenPlant.findByIdAndDelete(id)
  }

  async deleteByGardenId(id, userId) {
    const gardenPlant = await dbContext.GardenPlant.findOne({ gardenId: id })
    if (!gardenPlant) { throw new BadRequest('Invalid Garden Id') }
    if (gardenPlant.creatorId.toString() !== userId) {
      throw new BadRequest('Invalid request')
    }
    return await dbContext.GardenPlant.deleteMany({ gardenId: id })
  }
}

export const gardenPlantService = new GardenPlantService()
