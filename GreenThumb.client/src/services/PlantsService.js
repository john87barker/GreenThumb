
import { AppState } from '../AppState'
import { api } from './AxiosService'

class PlantsService {
  async getAllPlants(query = {}) {
    const res = await api.get('api/plants')
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

  async addPlantToGarden(rawGardenPlant) {
    // Create Many to many/edit the garden
    const res = await api.post('api/gardenplant', rawGardenPlant)
    console.log(res.data)
    AppState.gardenPlant = res.data
  }

  async getAllGardenPlantsByGardenId(id) {
    const res = await api.get('api/gardenplant' + id)
    console.log(res.data)
    AppState.gardenPlants = res.data
  }
}
export const plantsService = new PlantsService()
