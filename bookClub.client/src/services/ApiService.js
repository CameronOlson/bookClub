import axios from "axios"
import { AppState } from "../AppState"
import {googleApi} from '../env'
import{key} from '../env'
import { musicKey } from "../env"
import{movieKey} from '../env'
import { logger } from "../utils/Logger"


const booksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
})
const movieApi = axios.create({
  baseURL: 'http://www.omdbapi.com/'
})
const musicApi = axios.create({
  baseURL: 'https://www.theaudiodb.com'
})
class ApiService {
  async findBooksByQuery(query) {
    const words = query.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }

    const res = await booksApi.get('' + words.join('+') + '/' + key + '&maxResults=40')
    logger.log('this is Books for the project', res.data.items
    )
    logger.log(res.request.responseURL)
    AppState.books = res.data.items
    logger.log("this is appstate.books", AppState.books)
  }
  async findMoviesByQuery(query){
    const words = query.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    const res = await movieApi.get(''+ movieKey + '&s=' + words.join('+') 
    )
    AppState.movies = res.data.Search
    logger.log('this is appstate.movies', AppState.movies)



  }
  async findMusicByQuery(query){
    this.getMusicDiscography(query)
    const words = query.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toLowerCase() + words[i].substr(1).toLowerCase();
    }
    const res = await musicApi.get('' + '/api/v1/json/2/search.php?s=' + words.join('_')
    )
    AppState.musics = res.data.artists
    logger.log('this is appstate.musics', AppState.musics)
  }
  async getMusicDiscography(query){
    const words = query.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toLowerCase() + words[i].substr(1).toLowerCase();
    }
    const res = await musicApi('' + '/api/v1/json/' + musicKey +'/searchalbum.php?s=' + words.join('_'))
    AppState.albums = res.data.album
    logger.log('albums for the artist Appstate', AppState.albums)
  }
  async getMovieById(movieId){
    debugger
    const res = await movieApi.get(''+movieKey+'&i=' + movieId+'&plot=full')
    AppState.chosenMovie = res.data
    logger.log(res.data)
  }

  async findGamesByQuery(query){
    const words = query.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }

   let res = await fetch("https://steam2.p.rapidapi.com/search/" + words.join('&20') + "/page/1", {
	"method": "GET",
  // these headers can be imported from axios
	"headers": {
		"x-rapidapi-host": "steam2.p.rapidapi.com",
		"x-rapidapi-key": "304ef84d04msh3e1047954e051bfp12a5fejsn5851e54f98df"
	}
})
let data = await res.json()
AppState.games = data
logger.log('this is AppState.games', AppState.games)
  }

}
export const apiService = new ApiService()