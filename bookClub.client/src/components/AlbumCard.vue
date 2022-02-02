<template>
  <div
    class="selectable col-4"
    data-bs-toggle="modal"
    :data-bs-target="'#album' + album.idAlbum"
  >
    <img
      class="pt-3 rounded-edge"
      style="height: 100%; width: 100%; object-fit: contain"
      :src="album.strAlbumThumb"
      alt=""
    />
  </div>
</template>


<script>
export default {
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.rounded-edge {
  border-radius: 2rem;
}
</style>