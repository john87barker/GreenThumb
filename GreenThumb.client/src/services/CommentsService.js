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
    return this.getCommentsByPostId(postid)
  }

  async editComment(comment) {
    const res = await api.put('api/comments/' + comment.id, comment)
    // const findId = AppState.posts.findIndex(p => p.id === res.data.id)
    // AppState.posts.splice(findId, 1, res.data)
    this.getCommentsByPostId(comment.postId)
  }

  async closeComment(comment) {
    const res = await api.delete('api/comments/' + comment.id)
  }
}
export const commentsService = new CommentsService()
