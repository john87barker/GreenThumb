import { gardenPlantService } from '../services/GardenPlantService'
import { gardenService } from '../services/GardenService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class GardenPlantController extends BaseController {
  constructor() {
    super('api/gardenPlant')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)

      // TODO move this to the garden controller id is gardenId
      .get('/:id', this.getAll)
      .get('/creator/plants', this.getAllGardenPlantsByCreator)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      // TODO move this to the garden controller probably call to the same service that it is.
      .delete('/garden/:id', this.deleteByGardenId)
  }

  async getAll(req, res, next) {
    try {
      const gardenPlant = await gardenPlantService.getAllPlantsbyGardenId(req.params.id)
      res.send(gardenPlant)
    } catch (error) {
      next(error)
    }
  }

  async getAllGardenPlantsByCreator(req, res, next) {
    try {
      const gardenPlant = await gardenPlantService.getAllGardenPlantsByCreator(req.userInfo.id)
      res.send(gardenPlant)
    } catch (error) {
      next(error)
    }
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

  async delete(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const delgardenPlant = await gardenPlantService.delete(req.params.id, req.userInfo.id)
      res.send(delgardenPlant)
    } catch (error) {
      next(error)
    }
  }

  async deleteByGardenId(req, res, next) {
    try {
      const delGarden = await gardenPlantService.deleteByGardenId(req.params.id, req.userInfo.id)
      res.send(delGarden)
    } catch (error) {
      next(error)
    }
  }
}
