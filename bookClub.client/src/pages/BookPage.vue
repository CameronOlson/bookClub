<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Book Page</h1>
    </div>
    <div class="row">
      <div class="col-10 m-auto">
        <form
          @submit.prevent="findBooksByQuery()"
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
              placeholder="Search for books"
            />
            <button class="btn px-2 py-0 selectable">
              <i class="mdi mdi-magnify"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="masonry">
      <BookCard v-for="b in books" :key="b.id" :book="b" />
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
      books: computed(() => AppState.books),
      async findBooksByQuery() {
        try {
          await apiService.findBooksByQuery(query.value)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
@media only screen and (min-width: 600px) {
  .masonry {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;

    -webkit-column-gap: 15px;
    -moz-column-gap: 15px;
    column-gap: 15px;
  }
}
</style>
