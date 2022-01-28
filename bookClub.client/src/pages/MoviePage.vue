<template>
  <div class="component">
    <div class="container-fluid bg-black">
      <div class="row">
        <h1 class="text-light">Movie Page</h1>
      </div>
      <div class="row bg-black">
        <div class="col-10 m-auto">
          <form
            @submit.prevent="findMoviesByQuery()"
            class="rounded elevation-1 m-1"
          >
            <div class="form-group d-flex align-items-center">
              <label for="search" class="sr-only"></label>
              <input
                v-model="query"
                type="text"
                name="search"
                required
                class="form-control bg-white border-0"
                placeholder="Search for movies"
              />
              <button class="btn px-2 py-0 selectable">
                <i class="mdi mdi-magnify"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-black">
    <div class="row">
      <MovieCard v-for="m in movies" :key="m.id" :movie="m" />
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { apiService } from "../services/ApiService"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
export default {
  setup() {
    const query = ref('')
    return {
      query,
      movies: computed(() => AppState.movies),
      async findMoviesByQuery() {
        try {
          await apiService.findMoviesByQuery(query.value)
        } catch (error) {
          Pop.toast(error, error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.bg-black {
  background-color: black;
}
</style>