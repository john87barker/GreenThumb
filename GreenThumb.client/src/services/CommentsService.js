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
}
export const commentsService = new CommentsService()