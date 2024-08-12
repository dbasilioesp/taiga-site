<script setup>
const route = useRoute();

const breads = [
  { link: "/livros", label: "Livros" },
  { link: `/livros/categoria/${route.params.slug}`, label: route.params.slug },
];

const filteredBooks = computed(() => {
  return books.filter((i) => i.imagem && i.tags?.includes(route.params.slug));
});
</script>

<template>
  <div class="page">
    <div class="cbase">
      <UIBreadcrumbs :items="breads" />

      <h1 class="page__title text-7xl font-bold orange capitalize">
        {{ route.params.slug }}
      </h1>

      <div class="base-grid">
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

.page__title {
  margin-bottom: 40px;
}
</style>
