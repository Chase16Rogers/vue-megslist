<template>
  <div class="houses-page container-fluid">
    <div class="row">
      <div class="col">
        <h1>|<img alt="Vue logo" src="../assets/logo.png" class="logo" />ouses</h1>
      </div>
    </div>

    <div class="row">
      <house-component v-for="house in houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
// import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
import HouseComponent from '../components/HouseComponent.vue'

export default {
  name: 'HousesPage',
  components: {
    HouseComponent
  },
  setup() {
    // const router = useRouter()
    const state = reactive({
      newHouse: '',
      appState: computed(() => AppState.houses)
    })
    onMounted(async() => {
      try {
        await housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      houses: computed(() => AppState.houses)
    }
  }
}
</script>

<style scoped>
.logo{
transform: rotateZ(180deg);
}
</style>
