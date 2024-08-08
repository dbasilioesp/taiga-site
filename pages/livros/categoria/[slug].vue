<script setup>
const route = useRoute();

const filteredBooks = computed(() => {
  return books.filter((i) => i.imagem && i.tags?.includes(route.params.slug));
});
</script>

<template>
  <div class="page">
    <div class="cbase">
      <h1 class="page__title text-7xl font-bold orange capitalize">{{  route.params.slug }}</h1>

      <div class="page__grid">
        <UIBookCard
          v-for="book in filteredBooks"
          :key="book.nome"
          :title="book.nome"
          :author="book.autores"
          :image="book.imagem"
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
  flex-wrap: wrap;
  gap: 30px;
}

.page__title {
  margin-bottom: 40px;
}
</style>
