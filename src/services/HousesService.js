import { AppState } from '../AppState'
import { api } from './AxiosService'

class HousesService {
  async getHouses() {
    const res = await api.get('houses')
    AppState.houses = res.data
  }

  async getHouse(id) {
    console.log(id)
    const res = await api.get('houses/' + id)
    AppState.activeHouse = res.data
  }
}
export const housesService = new HousesService()
