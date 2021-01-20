import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://chase-bcw-class.herokuapp.com/api',
  timeout: 3000
})
