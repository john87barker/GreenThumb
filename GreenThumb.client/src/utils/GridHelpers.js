import { ref } from 'vue'
import { gridTiles } from './GridTiles'

const gridElem = ref(null)
export const activeTile = ref(gridTiles.value[1])
export const gridData = ref({
  settings: {
    width: 10,
    height: 7,
    tileResolution: {
      x: 64,
      y: 64
    }
  },
  map: []
})

export function registerGridElem(elem) {
  gridElem.value = elem.value
  gridElem.value.addEventListener('mousedown', draw)
  gridElem.value.addEventListener('mouseup', removeDraw)
}

export function setGridData(data) {
  if (!data) { return }
  gridData.value = data
}

export function draw(e) {
  gridElem.value?.addEventListener('mousemove', draw)
  const cell = e.target
  const id = cell.id.split('-')
  if (e.shiftKey) {
    gridData.value.map[id[0]][id[1]] = 0
  } else if (activeTile.value) {
    gridData.value.map[id[0]][id[1]] = activeTile.value.id
  }
  drawGrid()
}

export function removeDraw() {
  gridElem.value?.removeEventListener('mousemove', draw)
}

export function drawGrid() {
  gridElem.value.style.width = gridData.value.settings.width * gridData.value.settings.tileResolution.x + 'px'
  gridElem.value.style.height = gridData.value.settings.height * gridData.value.settings.tileResolution.y + 'px'
  gridElem.value.innerHTML = ''
  const template = buildGridTemplate(gridData.value)
  gridElem.value.innerHTML = template
}

export function buildGridTemplate() {
  const settings = gridData.value?.settings
  if (!settings) { return }
  let template = ''
  gridData.value.map.length = settings.height
  for (let row = 0; row < settings.height; row++) {
    const r = gridData.value.map[row] = gridData.value.map[row] || []
    r.length = settings.width
    for (let col = 0; col < settings.width; col++) {
      const tileId = gridData.value.map[row][col] || 0
      const tile = gridTiles.value[tileId]
      tile
        ? template += `
              <div 
                id="${row}-${col}" 
                class="cell"  
                style="background-image: url(${tile.url}); 
                height: ${gridData.value.settings.tileResolution.y}px; 
                width: ${gridData.value.settings.tileResolution.x}px"></div>
              `
        : template += `
              <div 
                id="${row}-${col}" 
                class="cell empty" 
                style="height: ${gridData.value.settings.tileResolution.y}px; 
                width: ${gridData.value.settings.tileResolution.x}px"></div>
              `
    }
  }
  return template
}
