import axios from 'axios'
// import ApiService from './Components/apiService/ApiService'
axios.defaults.baseURL = 'https://pixabay.com/api/'
export const fetchImages = async (searchQuery, page) => {
  const API_KEY = '21748955-40ae248ad9ce65df002076b41'
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
  return response.data.hits
}
