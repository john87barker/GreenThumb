
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
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

  async getGardensByCreatorId(id) {
    const res = await api.get('api/gardens/creator/gardens/john')
    AppState.gardens = res.data
  }

  async getGardensByProfileId(id) {
    const res = await api.get(`account/${id}/garden`)
    AppState.gardens = res.data
  }

  async getAllGardenPlantsByCreator() {
    const res = await api.get('api/gardenplant/creator/plants')
    AppState.gardenPlants = res.data
    // console.log(res.data)
  }

  async getPlantsByGardenId(id) {
    const res = await api.get('api/gardens/' + id)
    AppState.gardenPlants = res.data
  }

  async editGarden(garden) {
    const res = await api.put('api/gardens/' + garden.id, garden)
    AppState.garden = res.data
    logger.log(res.data)
    this.getGardensByCreatorId()
  }

  async removePlant(id) {
    const res = await api.delete('api/gardenplant/' + id)
    console.log(res.data)
    this.getAllGardenPlantsByCreator()
  }

  async removeGarden(id) {
    const res = await api.delete('api/gardens/gardenId/' + id)
    console.log(res.data)
    this.getAllGardenPlantsByCreator()
  }
}
export const gardensService = new GardensService()
