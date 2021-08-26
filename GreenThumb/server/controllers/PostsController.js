import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService'
import { commentsService } from '../services/CommentsService'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
      .get('/search', this.getSearchedPosts)
      .get('/:id', this.getPostById)
      .get('/:id/comments', this.getCommentsByPostId)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.closePost)
  }

  async getAll(req, res, next) {
    try {
      const posts = await postsService.getAll(req.query)
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getSearchedPosts(req, res, next) {
    try {
      const query = { title: req.query.query }
      const posts = await postsService.getSearchedPosts(query)
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getPostById(req, res, next) {
    try {
      const post = await postsService.getPostById(req.params.id)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async getCommentsByPostId(req, res, next) {
    try {
      const comments = await commentsService.getCommentsByPostId({ postId: req.params.id })
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      const post = await postsService.create(req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      const post = await postsService.editPost(req.params.id, req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async closePost(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const post = await postsService.closePost(req.params.id, req.userInfo.id)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }
}
