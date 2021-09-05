<template>
  <div class="grid-container">
    <div ref="gridElem" class="grid"></div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { testGrid } from '../utils/testGrid'
import { drawGrid, registerGridElem, setGridData, gridData } from '../utils/GridHelpers'

export default {
  name: 'Component',
  setup() {
    const gridElem = ref(null)
    onMounted(() => {
      registerGridElem(gridElem)
      drawGrid()
    })
    return {
      gridElem,
      gridData,
      drawTestGrid() {
        setGridData(testGrid)
        drawGrid()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss">
.grid-container{
  background: url(assets/img/dirt.png);
  min-height: 200px;
  min-width: 200px;
  max-width: 100%;
  max-height: 80vh;
  overflow: auto;
}
.grid {
  outline: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
}

.cell {
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 64px;
  width: 64px;
  background-size: cover;
  outline: 1px solid white;
}

.cell.empty {
  outline: 1px solid white;
  background: rgba(25, 25, 25, 0.3);
}
</style>
