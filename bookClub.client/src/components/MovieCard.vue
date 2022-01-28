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
.card-layout {
}
</style>