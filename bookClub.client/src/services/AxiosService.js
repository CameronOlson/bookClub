import Axios from 'axios'
import { baseURL } from '../env'
export const gameApi = Axios.create({
  baseURL,
  timeout: 8000,
  headers:  {
		"x-rapidapi-host": "steam2.p.rapidapi.com",
		"x-rapidapi-key": "304ef84d04msh3e1047954e051bfp12a5fejsn5851e54f98df"
	}
})
export const api = Axios.create({
  baseURL,
  timeout: 8000,
  
})
