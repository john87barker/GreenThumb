
import { AppState } from '../AppState'
import { api } from './AxiosService'

class PlantsService {
  async getAllPlants(query = {}) {
    const res = await api.get('api/plants')
    console.log(res.data)
    AppState.plants = res.data
  }

  async getPlantById(id) {
    const res = await api.get('api/plants/' + id)
    AppState.activePlant = res.data
  }

  async setActivePlant(id) {
    const res = await api.get('api/plants/' + id)
    AppState.activePlant = res.data
  }
}
export const plantsService = new PlantsService()
