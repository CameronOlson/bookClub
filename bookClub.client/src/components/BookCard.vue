<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card p-1 m-1">
      {{ book.volumeInfo.title }}
    </div>
    <div v-if="book.volumeInfo.imageLinks">
      <img :src="book.volumeInfo.imageLinks.thumbnail" alt="" />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
</style>