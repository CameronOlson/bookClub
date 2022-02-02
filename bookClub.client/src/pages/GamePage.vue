<template>
  <div class="component">
    <div class="container-fluid">
      <div class="row">
        <h1>Game Page</h1>
      </div>
      <div class="row">
        <div class="col-10 m-auto">
          <form
            @submit.prevent="findGamesByQuery()"
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
                placeholder="Search for games"
              />
              <button class="btn px-2 py-0 selectable">
                <i class="mdi mdi-magnify"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <GameCard v-for="g in games" :key="g.id" :game="g" />
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
      games: computed(() => AppState.games),
      movies: computed(() => AppState.movies),
      async findGamesByQuery() {
        try {
          await apiService.findGamesByQuery(query.value)
        } catch (error) {
          Pop.toast(error, error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>