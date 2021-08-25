
import { AppState } from '../AppState'
import { api } from './AxiosService'
import { gardensService } from './GardensService'

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
    AppState.gardenPlant = res.data
    gardensService.getAllGardenPlantsByCreator()
  }

  async getAllGardenPlantsByGardenId(id) {
    // REVIEW this function is not actually being used
    const res = await api.get('api/gardenplant' + id)
    AppState.gardenPlants = res.data
  }
}
export const plantsService = new PlantsService()
