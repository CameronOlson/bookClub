<template>
  <div class="col-4">
    <img
      style="height: 100%; width: 100%; object-fit: contain"
      :src="album.strAlbumCDart"
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
</style>