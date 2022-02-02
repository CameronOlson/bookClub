<template>
  <div class="component">
    <div class="row text-light">
      <div class="col-12 artist-banner p-1">
        <img
          style="height: 100%; width: 100%; object-fit: contain"
          :src="artist.strArtistBanner"
          alt=""
        />
      </div>
      <div class="col-3 p-1 short">
        <img
          style="height: 100%; width: 100%; object-fit: contain"
          :src="artist.strArtistThumb"
          alt=""
        />
      </div>
      <div class="col-8 m-auto p-1">
        {{ artist.strBiographyEN }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    artist: {
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
.artist-banner {
  display: flex;
  justify-content: center;
  align-items: center;
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
.short {
  height: 18rem;
}
</style>