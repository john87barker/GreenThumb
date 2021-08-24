import { newsApi } from './AxiosService.js'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState.js'

class ArticlesService {
  async getAll() {
    try {
      const res = await newsApi.get('')
      // console.log(res.data)
      AppState.articles = res.data.articles
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }
}

export const articlesService = new ArticlesService()
