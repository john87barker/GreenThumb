<template>
  <div class="weather">
    <div class="row">
      <div class="col-md-3 text-center" v-if="weathers">
        <p>{{ weathers.location.forecast.forecastday(0).day.avgtemp_f }}</p>
        <p>{{ weathers.location.forecast.forecastday(0).condition.text }}</p>
        <p><img :src="weathers.location.forecast.forecastday(0).day.condition.icon"></p>
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
      weathers: computed(() => AppState.weather)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
