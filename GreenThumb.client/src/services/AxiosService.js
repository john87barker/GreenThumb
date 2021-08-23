import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const weatherapi = Axios.create({
  baseURL: 'http://api.weatherapi.com/v1/current.json?key=d23232cbf44a436181a183838212308&q=boise&aqi=no',
  timeout: 10000
})
// REVIEW Weather API key has been created using shankerkarra@gmail.com account and it does need ZIPcode
// at present it is has been hardcoded with boise

// http://api.weatherapi.com/v1/forecast.json?key=d23232cbf44a436181a183838212308&q=83704&days=3
//
