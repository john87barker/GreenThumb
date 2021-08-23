import { weatherapi } from './AxiosService.js'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState.js'

class WeathersService {
  // eslint-disable-next-line no-useless-constructor
  constructor(data) {
    // console.log("Msg at Weather constructor")

    // this.avgtemp =  //location.forecast.forcastday(0).day.avgtemp_f
    // this.text =  //location.forecast.forcastday(0).day.condition.text
    // this.icon =   //location.forecast.forcastday(0).day.condition.icon
  }

  async getWeather() {
    try {
      const res = await weatherapi.get('')
      AppState.weather = res.data
      console.log(res.data)
      console.log(res.data.location.forecast)
      // console.log(res.data.location.forecast.forecastday(0).day.avgtemp_f)
      // console.log(res.data.location.forecast.forecastday(0).condition.text)
      // console.log(res.data.location.forecast.forecastday(0).condition.icon)
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }
}

export const weathersService = new WeathersService()
