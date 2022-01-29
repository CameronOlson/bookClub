<template>
  <div
    class="selectable masonry-card"
    data-bs-toggle="modal"
    :data-bs-target="'#book' + book.id"
  >
    <div class="card p-1 m-1">
      <div class="card-header">
        {{ book.volumeInfo.title }}
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-6" v-if="book.volumeInfo.imageLinks">
            <img :src="book.volumeInfo.imageLinks.thumbnail" alt="" />
          </div>
          <div v-if="book.searchInfo" class="col-6">
            <p>
              {{ book.searchInfo.textSnippet }}
            </p>
          </div>
          <div class="row">
            <p class="p-0 m-0" v-if="book.volumeInfo.authors">
              By {{ book.volumeInfo.authors[0] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal :id="'book' + book.id">
    <template #modal-body>
      <div class="row">
        <div class="col-12 text-center">
          <strong>{{ book.volumeInfo.title }}</strong>
        </div>
        <div v-if="book.volumeInfo.imageLinks" class="col-12 text-center">
          <img :src="book.volumeInfo.imageLinks.thumbnail" alt="" />
        </div>

        <div class="col-6">Rating {{ book.volumeInfo.averageRating }}/5</div>
        <div class="col-6">
          <div v-if="book.volumeInfo.authors">
            <p>Author - {{ book.volumeInfo.authors[0] }} <br /><br /></p>
          </div>
        </div>

        <div class="col-10 m-auto text-center scroll-box">
          <strong>About</strong> <br />
          {{ book.volumeInfo.description }}
        </div>
      </div>
    </template>
  </Modal>
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
.masonry-card {
  display: inline-block;
  width: 100%;
}
.scroll-box {
  max-height: 20rem;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>