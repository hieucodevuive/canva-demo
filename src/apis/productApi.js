import axios from 'axios'

export const getProductApi = async() => {
  const response = await axios.get('https://apis.ezpics.vn/apis/getNewProductAPI')
  return response.data
}