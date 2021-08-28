<template>
  <div class="grid-tiles">
    <ul class="d-flex">
      <!-- {{ gridTiles }} -->
      <li
        v-for="tile in gridTiles"
        :key="tile.id"
        class="tile-option"
        :class="{active: activeTile.id === tile.id}"
        @click="setActiveTile(tile)"
      >
        <img :src="tile.url" :title="tile.name">
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { activeTile } from '../utils/GridHelpers'
import { gridTiles } from '../utils/GridTiles'

export default {
  setup() {
    return reactive({
      activeTile,
      gridTiles,
      setActiveTile(tile) {
        activeTile.value = tile
      }
    })
  }
}
</script>

<style>
.tile-option img{
  height: 45px;
  width: 45px;
  object-fit: contain;
  object-position: center;
}
.tile-option.active{
  outline: 3px solid #ff00ff;
}
</style>
