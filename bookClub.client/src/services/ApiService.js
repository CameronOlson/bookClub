import axios from "axios"
import { AppState } from "../AppState"
import {googleApi} from '../env'
import{key} from '../env'
import { logger } from "../utils/Logger"


const booksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
})
class ApiService {
  async getBooks() {
    debugger
    const res = await booksApi.get('' + key)
    logger.log('this is Books for the project', res.data
    )
    logger.log(res.request.responseURL)
    AppState.books = res.data.results
  }
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

    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=" + words.join('&20') + "&r=json&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "304ef84d04msh3e1047954e051bfp12a5fejsn5851e54f98df"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});
  }
  async findMusicByQuery(query){
    const words = query.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }

    fetch("https://spotify23.p.rapidapi.com/search/?q=" + words.join('&20') + "&type=multi&offset=0&limit=10&numberOfTopResults=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spotify23.p.rapidapi.com",
		"x-rapidapi-key": "304ef84d04msh3e1047954e051bfp12a5fejsn5851e54f98df"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});
  }

}
export const apiService = new ApiService()