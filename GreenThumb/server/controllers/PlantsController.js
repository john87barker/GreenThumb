import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { plantsService } from '../services/PlantsService'

export class PlantsController extends BaseController {
  constructor() {
    super('api/plants')
    this.router
      .get('', this.getAllPlants)
      .get('/:id', this.getById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .post('', this.create)
  }

  async getAllPlants(req, res, next) {
    try {
      const plants = await plantsService.getAllPlants(req.query)
      res.send(plants)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const plants = await plantsService.getById(req.query.id)
      res.send(plants)
    } catch (error) {
      next(error)
    }
  }

  // async create(req, res, next) {
  //   try {
  //     // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
  //     // req.body.creatorId = req.userInfo.id
  //     const plant = await plantsService.create(req.body)
  //     res.send(plant)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
