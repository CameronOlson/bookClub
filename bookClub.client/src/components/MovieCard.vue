<template>
  <div
    @click="getMovieById(movie.imdbID)"
    class="selectable masonry-card"
    data-bs-toggle="modal"
    :data-bs-target="'#movie' + movie.imdbID"
  >
    <img :src="movie.Poster" alt="" />

    {{ movie.Title }}
  </div>
  <Modal :id="'movie' + movie.imdbID">
    <template #modal-title>
      <div>
        <h1>{{ movie.Title }}</h1>
        <div>{{ chosenMovie.Actors }}</div>
      </div>
    </template>
    <template #modal-body>
      <div>
        <p>
          {{ chosenMovie.Plot }}
        </p>
      </div>
    </template>
  </Modal>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
import { apiService } from "../services/ApiService"
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      chosenMovie: computed(() => AppState.chosenMovie),
      async getMovieById(movieId) {
        try {
          await apiService.getMovieById(movieId)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>