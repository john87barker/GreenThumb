import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { gardenService } from '../services/GardenService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .get('/:id/garden', this.getGardenByCreatorId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .put('', this.editAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getGardenByCreatorId(req, res, next) {
    try {
      const gardens = await gardenService.getGardensByCreatorId(req.params.id)
      res.send(gardens)
    } catch (error) {
      next(error)
    }
  }

  async editAccount(req, res, next) {
    try {
      const account = await accountService.editAccount(req.userInfo, req.body)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
