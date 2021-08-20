import { gardenPlantService } from '../services/GardenPlantService'
import { gardenService } from '../services/GardenService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class GardenPlantController extends BaseController {
  constructor() {
    super('api/gardenPlant')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
      .delete('/garden/:id', this.destroyByGardenId)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const gardenPlant = await gardenPlantService.create(req.body)
      res.send(gardenPlant)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const editgardenPlant = await gardenPlantService.edit(req.body)
      res.send(editgardenPlant)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    // Soft delete only
    // REVIEW
    try {
      const delgardenPlant = await gardenPlantService.delete(req.params.id, req.userInfo.id)
      res.send(delgardenPlant)
    } catch (error) {
      next(error)
    }
  }

  async destroyByGardenId(req, res, next) {
    // Soft delete only
    // REVIEW
    try {
      const delgardenPlant = await gardenPlantService.deleteByGardenId(req.params.id, req.userInfo.id)
      res.send(delgardenPlant)
    } catch (error) {
      next(error)
    }
  }
}
