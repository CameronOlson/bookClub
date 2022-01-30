<template>
  <div
    @click="getMovieById(movie.imdbID)"
    class="selectable col-4"
    data-bs-toggle="modal"
    :data-bs-target="'#movie' + movie.imdbID"
  >
    <div
      class="
        card
        p-0
        m-2
        d-flex
        justify-content-center
        align-items-center
        bg-dark
        text-light
      "
    >
      <img class="card-img m-1" :src="movie.Poster" alt="" />
      <div class="">
        <div>
          <p>
            {{ movie.Title }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <MovieModal :id="'movie' + movie.imdbID">
    <template #modal-title>
      <h1>{{ movie.Title }}</h1>
    </template>
    <template #modal-body>
      <div class="row">
        <div class="col-6 center">
          <img :src="chosenMovie.Poster" alt="" />
        </div>
        <div class="col-6">
          <p>
            {{ chosenMovie.Plot }}
          </p>
          <div>{{ chosenMovie.Actors }}</div>
        </div>
      </div>
    </template>
  </MovieModal>
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
.card-img {
  height: 30rem;
  width: 20rem;
}
.card-text {
  position: absolute;
  color: aliceblue;
  z-index: 1;
  transform: translateY(30rem);
  background-color: black;
  font-size: 12px;
}
.center {
  display: flex;
  justify-content: center;
}
</style>