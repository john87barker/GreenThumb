<template>
  <div class="weather">
    <div class="row">
      <div class="col-4 mheight p-1 text-center" v-if="weathers">
        <div>{{ getDayName(weathers.forecastday[0].date) }}</div>
        <!-- <div>{{ weathers.forecastday[0].date.toLocaleString('en-us', { weekday:"short"}) }}</div> -->
        <div>{{ weathers.forecastday[0].day.maxtemp_f }}</div>
        <!-- <div>{{ weathers.forecastday[0].day.condition.text }}</div> -->
        <div>
          <img :src="weathers.forecastday[0].day.condition.icon">
        </div>
      </div>
      <div class="col-4 mheight p-1 text-center" v-if="weathers">
        <div>{{ getDayName(weathers.forecastday[1].date) }}</div>
        <!-- <div>{{ weathers.forecastday[1].date.toLocaleString('en-us', { weekday:"short"}) }}</div> -->
        <div>{{ weathers.forecastday[1].day.maxtemp_f }}</div>
        <!-- <div>{{ weathers.forecastday[1].day.condition.text }}</div> -->
        <div>
          <img :src="weathers.forecastday[1].day.condition.icon">
        </div>
      </div>
      <div class="col-4 mheight p-1 text-center" v-if="weathers">
        <!-- <div>{{ weathers.forecastday[2].date.toLocaleString('en-us', { weekday:"short"}) }}</div> -->
        <div>{{ getDayName(weathers.forecastday[2].date) }}</div>
        <div>{{ weathers.forecastday[2].day.maxtemp_f }}</div>
        <!-- <div>{{ weathers.forecastday[2].day.condition.text }}</div> -->
        <div>
          <img :src="weathers.forecastday[2].day.condition.icon">
        </div>
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
      weathers: computed(() => AppState.weather.forecast),
      // date is string year-month-day
      getDayName(date) {
        const input = date.split('-')
        input[1] = (input[1].slice(1) - 1).toString()
        const d = new Date(input[0], input[1], input[2])
        const weekday = new Array(7)
        weekday[0] = 'Sun.'
        weekday[1] = 'Mon.'
        weekday[2] = 'Tue.'
        weekday[3] = 'Wed.'
        weekday[4] = 'Thu.'
        weekday[5] = 'Fri.'
        weekday[6] = 'Sat.'
        const n = weekday[d.getDay()]
        return n
      }
    }
  }
}

</script>

<style lang="scss" scoped>
img{
  height: 100%;
}
.mheight{
  max-height: 16vh;
}
</style>
