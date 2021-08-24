<template>
  <div class="weather">
    <div class="row m-1">
      <div class="Col-4 col-md-4 p-1 text-center" v-if="weathers">
        <p>Today Temp</p>
        <!-- <p>{{ weathers.forecastday[0].date.toLocaleString('en-us', { weekday:"short"}) }}</p> -->
        <p>{{ weathers.forecastday[0].day.avgtemp_f }}</p>
        <p>{{ weathers.forecastday[0].day.condition.text }}</p>
        <p><img :src="weathers.forecastday[0].day.condition.icon"></p>
      </div>
      <div class="col-4 col-md-4 p-1 text-center" v-if="weathers">
        <p>Tom'w Temp</p>
        <!-- <p>{{ weathers.forecastday[1].date.toLocaleString('en-us', { weekday:"short"}) }}</p> -->
        <p>{{ weathers.forecastday[1].day.avgtemp_f }}</p>
        <p>{{ weathers.forecastday[1].day.condition.text }}</p>
        <p><img :src="weathers.forecastday[1].day.condition.icon"></p>
      </div>
      <div class="col-4 col-md-4 p-1 text-center" v-if="weathers">
        <!-- <p>{{ weathers.forecastday[2].date.toLocaleString('en-us', { weekday:"short"}) }}</p> -->
        <p>Day after</p>
        <p>{{ weathers.forecastday[2].day.avgtemp_f }}</p>
        <p>{{ weathers.forecastday[2].day.condition.text }}</p>
        <p><img :src="weathers.forecastday[2].day.condition.icon"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { weathersService } from '../services/WeathersService'
import Pop from '../utils/Notifier'

export default {
  name: 'Weather',
  setup() {
    onMounted(async() => {
      try {
        await weathersService.getWeather()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      weathers: computed(() => AppState.weather.forecast)
      // todayWeek: computed(() => AppState.weather.forecast.forecastday[0].date.getDay())
    }
  }
}
// .toLocaleDateString('en-us', { weekday:"short"})
// console.log(res.data.forecast.forecastday[0].day.avgtemp_f)
// console.log(res.data.forecast.forecastday[0].day.condition.text)
// console.log(res.data.forecast.forecastday[0].day.condition.icon)
//    <p>{{ weathers.forecast.forecastday[0].day.condition.text }}</p>
//    <p><img :src="weathers.forecast.forecastday[0].day.condition.icon"></p>

</script>

<style lang="scss" scoped>
</style>
