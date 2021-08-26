import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const newsApi = Axios.create({
  baseURL: 'https://newsapi.org/v2/everything?q=gardening&apiKey=7a9204818fa3450985cfd59c37e017e4',
  timeout: 10000
})

// export const singleNewsApi = Axios.create({
//   baseURL: 'https://newsapi.org/v2/everything?q=gardening&apiKey=7a9204818fa3450985cfd59c37e017e4&pageSize=1',
//   timeout: 10000
// })

export const weatherapi = Axios.create({
  baseURL: 'http://api.weatherapi.com/v1/forecast.json?key=d23232cbf44a436181a183838212308&q=83704&days=3',
  timeout: 10000
})
// REVIEW Weather API key has been created using shankerkarra@gmail.com account and it does need ZIPcode
// at present it is has been hardcoded with boise

// http://api.weatherapi.com/v1/forecast.json?key=d23232cbf44a436181a183838212308&q=83704&days=3
// REVIEW for current
// http://api.weatherapi.com/v1/current.json?key=d23232cbf44a436181a183838212308&q=83704&aqi=no
