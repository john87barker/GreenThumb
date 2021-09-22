import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

// NOTE bing api
export const newsApi = Axios.create({
  baseURL: 'https://bing-news-search1.p.rapidapi.com/news/search?q=intitle%3Agarden&safeSearch=Off&textFormat=Raw&freshness=Day&rapidapi-key=c72bb6b8admshb8a6921c220778fp13b05cjsn639b75aef3c3',
  timeout: 10000
})

// NOTE NewsApi
// export const newsApi = Axios.create({
//   baseURL: 'https://newsapi.org/v2/everything?qInTitle=gardening&excludeDomains=nytimes.com&apiKey=7a9204818fa3450985cfd59c37e017e4',
//   timeout: 10000
// })
// NOTE this api will no longer be used in production because it is $449 a month after production...
// export const singleNewsApi = Axios.create({
//   baseURL: 'https://newsapi.org/v2/everything?q=gardening&apiKey=7a9204818fa3450985cfd59c37e017e4&pageSize=1',
//   timeout: 10000
// })

export const weatherapi = Axios.create({
  baseURL: 'https://api.weatherapi.com/v1/forecast.json?key=d23232cbf44a436181a183838212308&q=83704&days=3',
  timeout: 10000
})
// REVIEW Weather API key has been created using shankerkarra@gmail.com account and it does need ZIPcode
// at present it is has been hardcoded with boise

// http://api.weatherapi.com/v1/forecast.json?key=d23232cbf44a436181a183838212308&q=83704&days=3
// REVIEW for current
// http://api.weatherapi.com/v1/current.json?key=d23232cbf44a436181a183838212308&q=83704&aqi=no
