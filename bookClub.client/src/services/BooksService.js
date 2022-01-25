import axios from "axios"
import { AppState } from "../AppState"
import {googleApi} from '../env'
import{key} from '../env'
import { logger } from "../utils/Logger"


const booksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
})
class BooksService {
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

}
export const booksService = new BooksService()