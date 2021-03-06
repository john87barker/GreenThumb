import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  posts: [],
  weather: {},
  comments: {},
  plants: [],
  activePlant: {},
  articles: [],
  // singlearticles: [],
  gardens: [],
  gardenPlant: {},
  gardenPlants: []
})
