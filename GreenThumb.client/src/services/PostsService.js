import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts')
    AppState.posts = res.data
  }

  async createPost(rawPost) {
    const res = await api.post('api/posts', rawPost)
    AppState.posts = [res.data, ...AppState.posts]
  }

  async closePost(post) {
    const res = await api.delete('api/posts/' + post.id)
    return res.data.postId
  }
}
export const postsService = new PostsService()
