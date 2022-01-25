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
          <div class="col-6">
            <p>
              {{ book.volumeInfo.subtitle }}
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
    <template #modal-title>
      <div>
        <p>{{ book.volumeInfo.title }}</p>
      </div>
    </template>
    <template #modal-body> </template>
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