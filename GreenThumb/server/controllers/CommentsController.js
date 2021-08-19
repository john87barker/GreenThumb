import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from "../services/CommentsService"

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }
  async getAll(req, res, next) {
    try {
      const comment = await commentsService.
    res.send(post)
  } catch (error) {
    next(error)
  }

  async getById(req, res, next) {
    try {
      const comment = await commentsService.
    res.send(post)
  } catch (error) {
    next(error)
  }

  async create(req, res, next) {
    try {
      const comment = await commentsService.
    res.send(post)
  } catch (error) {
    next(error)
  }

  async edit(req, res, next) {
    try {
      const comment = await commentsService.
    res.send(post)
  } catch (error) {
    next(error)
  }

  async destroy(req, res, next) {
    try {
      const comment = await commentsService.
    res.send(post)
  } catch (error) {
    next(error)
  }

}
