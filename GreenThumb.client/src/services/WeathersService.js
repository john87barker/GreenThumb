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
      // console.log(res.data.forecast)
      // console.log(res.data.forecast.forecastday[0].day.avgtemp_f)
      // console.log(res.data.forecast.forecastday[0].day.condition.text)
      // console.log(res.data.forecast.forecastday[0].day.condition.icon)
      // console.log(res.data.forecast.forecastday[1].day.avgtemp_f)
      // console.log(res.data.forecast.forecastday[1].day.condition.text)
      // console.log(res.data.forecast.forecastday[1].day.condition.icon)
      // console.log(res.data.forecast.forecastday[2].day.avgtemp_f)
      // console.log(res.data.forecast.forecastday[2].day.condition.text)
      // console.log(res.data.forecast.forecastday[2].day.condition.icon)
      // debugger
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }
}

export const weathersService = new WeathersService()
