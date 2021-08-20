import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class GardenService {
  async getAll(query = {}) {
    const garden = await dbContext.Gardens.find(query)
    if (!garden) {
      throw new BadRequest('Invalid Id')
    }
    return garden
  }

  async create(body) {
    const garden = await dbContext.Gardens.create(body)
    return await dbContext.Gardens.findById(garden._id).populate('creator', 'name picture')
  }

  async edit(body) {
    const garden = await dbContext.Gardens.findById(body.id)
    if (!garden) { throw new BadRequest('Invalid Garden') }
    //  REVIEW CHECK GARDENPLANT TABle, if all garden related are closed, then  cannot edit?
    if (body.creatorId.toString() !== body.creatorId) {
      throw new BadRequest('Invalid request')
    }
    const updategarden = await dbContext.Gardens.findById(body.id, body, { new: true }).populate('creator', 'name picture')
    return updategarden
  }
}

export const gardenService = new GardenService()
