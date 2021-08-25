
import { AppState } from '../AppState'
import { api } from './AxiosService'

class GardensService {
  async createGarden(rawGarden) {
    const res = await api.post('api/gardens', rawGarden)
    AppState.gardens = [res.data, ...AppState.gardens]
  }

  async getAllGardens() {
    const res = await api.get('api/gardens')
    AppState.gardens = res.data
  }

  async getGardensByCreatorId() {
    const res = await api.get('api/gardens/creator/gardens/john')
    AppState.gardens = res.data
  }
}
export const gardensService = new GardensService()