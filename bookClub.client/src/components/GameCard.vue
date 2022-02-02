<template>
  <div class="component">
    <img :src="game.imgUrl" alt="" />
    <div>
      {{ game.reviewSummary }}
    </div>
  </div>
</template>


<script>
export default {
  props: {
    game: {
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