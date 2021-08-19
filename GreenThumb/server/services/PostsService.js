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
    return await dbContext.Posts.findById(post.id)
    // .populate('creator', 'name picture')
  }

  async editPost(id, body) {
    const post = await dbContext.Posts.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    if (!post) {
      throw new BadRequest('No Post Found!')
    }
    return post
  }

  async closePost(id, userId) {
    const post = await dbContext.Posts.findById(id).populate('creator')
    if (!post.closed) {
      if ( userId === post.creator.id){
      const closed = await dbContext.Posts.findByIdAndUpdate(id, { closed: true }, { new: true })
      if (!closed) {
        throw new BadRequest('No Post Found')
      }
      return closed
    } else {
      throw new BadRequest('This is not your post')
    }
  } else {
    throw new BadRequest('Post is already Closed')
  }
}

export const postsService = new PostsService()
