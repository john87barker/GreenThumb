import { gardenPlantService } from '../services/GardenPlantService'
import { gardenService } from '../services/GardenService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService'

export class GardensController extends BaseController {
  constructor() {
    super('api/gardens')
    this.router
      .get('/:id', this.getAllPlantsbyGardenId)
      .get('/:id/questions', this.getallQuestionsbyGardenId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGarden)
      .put('/:id', this.editGarden)
      .delete('/:id', this.destroyGarden)
  }
  // post('api/garden/:is/posts')
  // deletePantIdfrom Garden .destroy(gardenid)

  async getAllPlantsbyGardenId(req, res, next) {
    try {
      const plants = await gardenPlantService.getAllPlantsbyGardenId(req.params.id)
      res.send(plants)
    } catch (error) {
      next(error)
    }
  }

  async getallQuestionsbyGardenId(req, res, next) {
    try {
      // REVIEW Refer the service name & method and update it later
      // const questions = await postsService.getallQuestionsbyGardenId(req.params.id)
      // res.send(questions)
    } catch (error) {
      next(error)
    }
  }

  async createGarden(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const garden = await gardenService.create(req.body)
      res.send(garden)
    } catch (error) {
      next(error)
    }
  }

  async editGarden(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const editgarden = await gardenService.edit(req.body)
      res.send(editgarden)
    } catch (error) {
      next(error)
    }
  }

  async destroyGarden(req, res, next) {
    // Soft delete only
    // REVIEW
    try {
      const delgarden = await gardenPlantService.delete(req.params.id, req.userInfo.id)
      res.send(delgarden)
    } catch (error) {
      next(error)
    }
  }
}
