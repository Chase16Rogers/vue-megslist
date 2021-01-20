import { AppState } from '../AppState'
import { api } from './AxiosService'

class HousesService {
  async getHouses() {
    try {
      const res = await api.get('houses')
      console.log(res.data)
      AppState.houses = res.data
    } catch (error) {
      console.error(error)
    }
  }
}
export const housesService = new HousesService()
