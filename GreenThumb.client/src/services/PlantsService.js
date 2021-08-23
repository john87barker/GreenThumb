
import { AppState } from '../AppState'
import { api } from './AxiosService'

class PlantsService {
  async getAllPlants(query = {}) {
    const res = await api.get('api/plants')
    AppState.plants = res.data
  }
}
export const plantsService = new PlantsService()
