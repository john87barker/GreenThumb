import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async getAllComments(query = {}) {
    const comments = await dbContext.Comments.find(query).populate('creator', 'name picture')
    return comments
  }

  async getCommentById(id) {
    const comment = await dbContext.Comments.findById(id).populate('creator', 'name picture')
    if (!comment) {
      throw new BadRequest('Invalid Comment Id')
    }
    return comment
  }

  async create(body) {
    const comment = await dbContext.Comments.create(body)
    return await dbContext.Comments.findById(comment.id)
    // .populate('creator', 'name picture')  - Do we need this?
  }

  async editComment(id, body) {
    const editcomment = await dbContext.Comments.findById(id)
    if (!editcomment) { throw new BadRequest('Invalid Comment') }
    if ()
    const editedComment = await dbContext.Comments.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    if (!editedComment) {
      throw new BadRequest('No Comment Found')
    }
    return editedComment
  }

  async destroy(id, userId) {
    const comment = await this.getCommentById(id)
    if (comment) {
      if (userId === comment.creator.id) {
        const commentToDie = await dbContext.Comments.findByIdAndDelete({ _id: id })
        return commentToDie
      }
      throw new BadRequest('This is not your comment!')
    }
    throw new BadRequest('Not Allowed for this user')
  }

  async getCommentsByPostId(query = {}) {
    // const post = await dbContext.Posts.findById(query)
    // if (!post) {
    //   throw new BadRequest('No Post Found!')
    // }
    const comments = await dbContext.Comments.find(query).populate('creator', 'name picture')
    return comments
    // return comments.filter(c => c.postId === id)
  }
}

export const commentsService = new CommentsService()
