import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class GardenPlantService {
  getAllPlantsbyGardenId(id) {
    throw new Error('Method not implemented.')
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

  // REVIEW  The below delete is to delete all plants related to the Garden

  async deleteByGardenId(id, userId) {
    const gardenPlant = await dbContext.GardenPlant.findById(id)
    if (!gardenPlant) { throw new BadRequest('Invalid GardenPlant') }
    if (gardenPlant.creatorId.toString() !== userId) {
      throw new BadRequest('Invalid request')
    }
    return await dbContext.GardenPlant.deleteMany({ gardenId: id })
  }
}

export const gardenPlantService = new GardenPlantService()
