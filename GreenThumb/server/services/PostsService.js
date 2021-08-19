import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {
  async getAll(query = {}) {
    const posts = await dbContext.Posts.find(query).populate('creator', 'name picture')
    return posts
  }

  async getPostById(id) {
    const post = await dbContext.Posts.findById(id).populate('creator', 'name picture')
    if (!post) {
      throw new BadRequest('Invalid Post Id')
    }
    return post
  }

  async create(body) {
    const post = await dbContext.Posts.create(body)
    return await dbContext.Posts.findById(post.id).populate('creator', 'name picture')
  }

  async editPost(body) {
    const post = await dbContext.Posts.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!post) {
      throw new BadRequest('No Post Found!')
    }
    return post
  }

  async closePost(id, userId) {
    const post = await dbContext.Posts.findOneAndUpdate({ id: id, creatorId: userId }, { closed: true })
    if (!post) {
      throw new BadRequest('No Post Found')
    }
    return post
  }
}

export const postsService = new PostsService()
