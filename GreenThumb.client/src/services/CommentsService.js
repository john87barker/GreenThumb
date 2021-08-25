import { AppState } from '../AppState'
import { api } from './AxiosService'

class CommentsService {
  async getCommentsByPostId(id) {
    const res = await api.get(`api/posts/${id}/comments`)
    AppState.comments[id] = res.data
  }

  async getAllComments() {
    const res = await api.get('api/comments')
    AppState.comments = res.data
  }

  async createComment(rawComment) {
    const res = rawComment.postId
    await api.post('api/comments', rawComment)
    return this.getCommentsByPostId(res)
  }

  async editComment(comment) {
    const res = comment.postId
    await api.put('api/comments/' + comment.id, comment)
    // const findId = AppState.posts.findIndex(p => p.id === res.data.id)
    // AppState.posts.splice(findId, 1, res.data)
    this.getCommentsByPostId(res)
  }

  async closeComment(comment, postId) {
    const res = await api.delete('api/comments/' + comment.id)
    this.getCommentsByPostId(postId)
  }
}
export const commentsService = new CommentsService()
