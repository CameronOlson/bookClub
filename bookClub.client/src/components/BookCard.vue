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
        <div v-if="book.volumeInfo.imageLinks" class="col-2">
          <img :src="book.volumeInfo.imageLinks.thumbnail" alt="" />
        </div>
        <div class="col-2"></div>
        <div class="col-6 text-center pt-2">
          <strong>{{ book.volumeInfo.title }}</strong>
        </div>
        <div class="col-2"></div>
        <div v-if="book.volumeInfo.authors" class="col-6">
          <p>
            Author - {{ book.volumeInfo.authors[0] }} <br /><br />
            {{ book.volumeInfo.description }}
          </p>
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
</style>