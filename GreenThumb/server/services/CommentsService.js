import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {

  async getCommentsByPostId(id) {
    const post = await dbContext.Posts.findById(id)
    if (!post) {
      throw new BadRequest('No Post Found!')
    }
    const comments = await dbContext.Comments.find({}).populate('creator', 'name picture')
    return comments.filter(c => c.postId == id)
  }

}

export const commentsService = new CommentsService()
