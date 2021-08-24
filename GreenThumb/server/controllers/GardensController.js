import { gardenPlantService } from '../services/GardenPlantService'
import { gardenService } from '../services/GardenService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class GardensController extends BaseController {
  constructor() {
    super('api/gardens')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getAllPlantsbyGardenId)
      .get('/:id/posts', this.getallPostsbyGardenId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/creator/gardens/john', this.getGardensByCreatorId)
      .post('', this.createGarden)
      .put('/:id', this.editGarden)
      .delete('/gardenId/:id', this.destroyByGardenId)
    //   .delete('/:id', this.destroyGarden)

  // post('api/garden/:is/posts')
  // deletePantIdfrom Garden .destroy(gardenid)
  }

  async getAll(req, res, next) {
    try {
      const garden = await gardenService.getAll(req.params.id)
      res.send(garden)
    } catch (error) {
      next(error)
    }
  }

  async getGardensByCreatorId(req, res, next) {
    try {
      const gardens = await gardenService.getGardensByCreatorId(req.userInfo.id)
      res.send(gardens)
    } catch (error) {
      next(error)
    }
  }

  async getAllPlantsbyGardenId(req, res, next) {
    try {
      const plants = await gardenPlantService.getAllPlantsbyGardenId(req.params.id)
      res.send(plants)
    } catch (error) {
      next(error)
    }
  }

  async getallPostsbyGardenId(req, res, next) {
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
  // REVIEW   Commented as at present we are not allowing to delete

  // async destroyGarden(req, res, next) {
  //   // Soft delete only
  //   // REVIEW
  //   try {
  //     const delgarden = await gardenPlantService.delete(req.params.id, req.userInfo.id)
  //     res.send(delgarden)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async destroyByGardenId(req, res, next) {
    // Hard delete from Manyto MAny table ( GardenPlant, based on GardenId)
    // REVIEW
    try {
      const delgardenPlant = await gardenPlantService.deleteByGardenId(req.params.id, req.userInfo.id)
      res.send(delgardenPlant)
    } catch (error) {
      next(error)
    }
  }
}
