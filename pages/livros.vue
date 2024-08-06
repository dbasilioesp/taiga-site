<script setup>
const filteredBooks = computed(() => {
  return books.filter((i) => i.Imagem);
});
</script>

<template>
  <div class="page">
    <div class="cbase">
      <h1 class="page__title text-7xl font-bold orange">Livros</h1>

      <div class="page__grid">
        <UIBookCard
          v-for="book in filteredBooks"
          :key="book.Nome"
          :title="book.Nome"
          :author="book.Autores"
          :image="book.Imagem"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 80px;
}

.page__grid {
  display: flex;
  gap: 30px;
}

.page__title {
  margin-bottom: 40px;
}
</style>
