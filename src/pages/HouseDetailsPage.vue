<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col">
        <img :src="state.house.imgUrl" alt="HOUSE 404">
        <h2>${{ state.house.price }}</h2>
        <h2>Bedrooms: {{ state.house.bedrooms }}</h2>
        <h2>Bathrooms: {{ state.house.bathrooms }}</h2>
        <h2>{{ state.house.levels }}-Story</h2>
        <h2>Built in {{ state.house.year }}</h2>
        <p>{{ state.house.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { housesService } from '../services/HousesService'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })
    onMounted(() => {
      try {
        housesService.getHouse(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>
