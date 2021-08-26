import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
import { api } from './AxiosService'

class SearchesService {
  async search(query) {
    try {
      logger.log(query)
      const res = await api.get(`api/posts?query=${query}`)
      logger.log(res.data)
      AppState.posts = res.data
    } catch (e) {
      Pop.toast(e, 'error')
    }
  }
}
export const searchesService = new SearchesService()
