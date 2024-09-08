<script setup>
useSeoMeta({
  title: "Livros",
});

const { data } = await useAsyncData("livros", () =>
  queryContent("livros").find()
);
const books = data.value;

const recommendations = computed(() => {
  return books.filter((i) => i.imagem && i.recomendamos);
});

const others = computed(() => {
  return books.filter((i) => i.imagem && !i.recomendamos);
});

const breads = [{ link: "/livros", label: "Livros" }];
</script>

<template>
  <UIPageContainer>
    <UIBreadcrumbs :items="breads" />

    <h1 class="text-7xl orange font-bold mb-6">Livros</h1>

    <div class="colorbox recommendation">
      <h2 class="recommendation__title text-4xl white font-bold mb-6 uppercase">
        Recomendamos
      </h2>
      <p class="mb-8 text-lg white">
        Quatro livros que gostariamos que nossos clientes lessem.
      </p>
      <div class="recommendation__grid">
        <UIBookCard
          v-for="book in recommendations"
          :key="book.title"
          :title="book.title"
          :author="book.autores"
          :image="book.imagem"
          :link="book._path"
        />
      </div>
    </div>

    <h2 class="text-4xl font-bold mt-10 mb-10 uppercase">Mais livros</h2>

    <div class="page__list baseGrid mb-10">
      <UIBookCard
        v-for="book in others"
        :key="book.title"
        :title="book.title"
        :author="book.autores"
        :image="book.imagem"
        :link="book._path"
      />
    </div>
  </UIPageContainer>
</template>

<style scoped>
.page {
}

.recommendation__title {
  letter-spacing: 1px;
  text-decoration: underline;
  text-underline-offset: 10px;
}

.recommendation__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.categories__card {
  border-radius: 4px;
  width: 300px;
  padding: 20px;
  background-color: var(--purple);
  font-size: 30px;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;
  text-decoration: underline;
  text-underline-offset: 5px;
}

.categories__card:hover {
  filter: brightness(1.3);
}
</style>
