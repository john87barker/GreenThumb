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

  async createComment(rawComment, postid) {
    const res = await api.post('api/comments', rawComment)
    this.getCommentsByPostId(postid)
  }
}
export const commentsService = new CommentsService()
