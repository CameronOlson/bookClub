<template>
  <div class="component bg-black">
    <div class="container-fluid">
      <div class="row">
        <h1>Movie Page</h1>
      </div>
      <div class="row">
        <div class="col-10 m-auto">
          <form
            @submit.prevent="findMusicByQuery()"
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
                placeholder="Music"
              />
              <button class="btn px-2 py-0 selectable">
                <i class="mdi mdi-magnify"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12">
        <div class="row p1 col-10 m-auto banner-background">
          <ArtistCard v-for="m in musics" :key="m.idArtist" :artist="m" />
        </div>
        <div class="row col-10 m-auto flex-wrap banner-background">
          <AlbumCard v-for="a in albums" :key="a.idAlbum" :album="a" />
        </div>
      </div>
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
      musics: computed(() => AppState.musics),
      albums: computed(() => AppState.albums),
      async findMusicByQuery() {
        try {
          await apiService.findMusicByQuery(query.value)
        } catch (error) {
          Pop.toast(error, error)
        }
      }
      // async findAlbumsByQuery() {
      //   try {
      //     await apiService.getMusicDiscography(query.value)
      //   } catch (error) {
      //     Pop.toast(error, )
      //   }
      // }
    }
  }
}
</script>


<style lang="scss" scoped>
.bg-black {
  background-color: black;
}
.banner-background {
  background: rgb(91, 1, 1);
  background: linear-gradient(
    90deg,
    rgba(91, 1, 1, 1) 0%,
    rgba(8, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 85%,
    rgba(110, 0, 0, 1) 100%,
    rgba(62, 0, 0, 1) 100%
  );
}
</style>