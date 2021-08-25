import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class GardenPlantService {
  async getAllPlantsbyGardenId(id) {
    const gardenPlant = await dbContext.GardenPlant.find({ gardenId: id }).populate('creator', 'name picture').populate('plant')
    return gardenPlant
  }

  async getAllGardenPlantsByCreator(userId) {
    const gardenPlant = await dbContext.GardenPlant.find({ creatorId: userId }).populate('creator', 'name picture').populate('plant').populate('garden')
    if (!gardenPlant) {
      throw new BadRequest('Unable to find plant')
    }
    return gardenPlant
  }

  async create(body) {
    // TODO make it only user working
    const gardenPlant = await dbContext.GardenPlant.create(body)
    return await dbContext.GardenPlant.findById(gardenPlant.id).populate('creator', 'name picture').populate('garden').populate('plant')
  }

  // REVIEW check edit later
  async edit(body) {
    const gardenPlant = await dbContext.GardenPlant.findById(body.id)
    if (!gardenPlant) { throw new BadRequest('Invalid GardenPlant') }
    if (gardenPlant.creatorId.toString() !== body.creatorId) {
      throw new BadRequest('Invalid request')
    }
    const updategardenPlant = await dbContext.GardenPlant.findByIdAndUpdate(body.id, body, { new: true }).populate('creator', 'name picture').populate('garden').populate('plant')
    return updategardenPlant
  }

  async delete(id, userId) {
    const gardenPlant = await dbContext.GardenPlant.findById(id)
    if (!gardenPlant) { throw new BadRequest('Invalid GardenPlant') }
    if (gardenPlant.creatorId.toString() !== userId) {
      throw new BadRequest('Invalid request')
    }
    return await dbContext.GardenPlant.findByIdAndDelete(id)
  }

  async deleteByGardenId(id, userId) {
    const garden = await dbContext.Gardens.findOne({ _id: id })
    if (!garden) { throw new BadRequest('Invalid Garden Id') }
    if (garden.creatorId.toString() !== userId) {
      throw new BadRequest('Invalid request')
    }
    return await dbContext.GardenPlant.deleteMany({ gardenId: id })
  }
}

export const gardenPlantService = new GardenPlantService()
