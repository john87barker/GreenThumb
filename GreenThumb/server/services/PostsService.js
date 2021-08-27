import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {
  async getAll(query = {}) {
    const posts = await dbContext.Posts.find(query).sort({ updatedAt: -1 }).populate('creator', 'name picture')
    if (!posts) {
      throw new BadRequest('Posts not found')
    }
    return posts
  }

  async getSearchedPosts(query = {}) {
    if (!query) {
      return this.getAll()
    }
    // REVIEW below stmt is to create index
    // await dbContext.Posts.createIndexes({ title: 'text', body: 'text' })
    //  TODO Below is the working string
    // const query1 = { title: { $regex: '.*' + query + '.*' }, body: { $regex: '.*' + query + '.*' } }

    const query1 = { body: { $regex: '.*' + query + '.*', $options: 'si' } }
    const posts = await dbContext.Posts.find(query1).sort({ updatedAt: -1 }).populate('creator', 'name picture')

    // for reference
    // const posts = await dbContext.Posts.find({ body: { $regex: '.*' + query + '.*' } }).populate('creator', 'name picture')

    if (!posts) {
      throw new BadRequest('Posts not found')
    }
    return posts
  }

  async getPostById(id) {
    const post = await dbContext.Posts.findById(id).sort({ updatedAt: -1 }).populate('creator', 'name picture')
    if (!post) {
      throw new BadRequest('Invalid Post Id')
    }
    return post
  }

  async create(body) {
    const post = await dbContext.Posts.create(body)
    return await dbContext.Posts.findById(post.id).populate('creator', 'name picture')
    // needed populate on here to display new post with creator name & picture.
  }

  async editPost(id, body) {
    const post = await dbContext.Posts.findById(id)
    // if (post) {
    if (!post.closed) {
      delete body.closed
      const editedPost = await dbContext.Posts.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      return editedPost
    } else {
      throw new BadRequest('Post is Closed and cannot be edited')
    }
  }
  // else {
  //   throw new BadRequest('No Such Post')
  // }

  async closePost(id, userId) {
    const post = await dbContext.Posts.findById(id).populate('creator')
    if (!post) {
      throw new BadRequest('No Post Found')
    }
    if (!post.closed) {
      if (post.creator.id === userId) {
        const closedPost = await dbContext.Posts.findByIdAndUpdate(id, { closed: true }, { new: true })
        return closedPost
      } else {
        throw new BadRequest('This is not your post')
      }
    } else {
      throw new BadRequest('Post is already Closed')
    }
  }
}
export const postsService = new PostsService()
