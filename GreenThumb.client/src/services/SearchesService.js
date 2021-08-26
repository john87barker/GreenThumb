import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
import { api } from './AxiosService'

class SearchesService {
  async search(query) {
    try {
      const res = await api.get('api/posts/search?query=' + query)
      AppState.posts = res.data
    } catch (e) {
      Pop.toast(e, 'error')
      logger.log(e)
    }
  }
}
export const searchesService = new SearchesService()
