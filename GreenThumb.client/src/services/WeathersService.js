import { weatherapi } from './AxiosService.js'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState.js'

class WeathersService {
  // eslint-disable-next-line no-useless-constructor
  constructor(data) {
    // console.log("Msg at Weather constructor")
  }

  async getWeather() {
    try {
      const res = await weatherapi.get('')
      AppState.weather = res.data
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }
}

export const weathersService = new WeathersService()
