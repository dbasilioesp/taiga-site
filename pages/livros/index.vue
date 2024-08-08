<script setup>
const recommendations = computed(() => {
  return books.filter((i) => i.imagem && i.recomendamos);
});

const categories = [
  { title: "Fantasia", link: "/livros/categoria/fantasia", color: "var(--orange)" },
  { title: "Horror", link: "/livros/categoria/horror", color: "var(--darkgrey)" },
  { title: "Romance", link: "/livros/categoria/romance", color: "var(--lilas)" },
  { title: "Social", link: "/livros/categoria/social", color: "var(--yellow)" },
];
</script>

<template>
  <div class="page pt-9">
    <div class="cbase">
      <div>
        <NuxtLink to="/" class="font-medium">Home</NuxtLink> &gt; <NuxtLink to="/livros" class="font-bold">Livros</NuxtLink>
      </div>
      <h1 class="text-7xl orange font-bold mb-8">Livros</h1>

      <div class="colorbox">
        <h2 class="colorbox__title text-4xl white font-bold mb-8 uppercase">
          Recomendamos
        </h2>
        <div class="colorbox__grid">
          <UIBookCard
            v-for="book in recommendations"
            :key="book.nome"
            :title="book.nome"
            :author="book.autores"
            :image="book.imagem"
            :link="`/livros/${book.slug}`"
          />
        </div>
      </div>

      <h2 class="text-4xl orange font-bold mb-8 uppercase mt-10">Categorias</h2>

      <div class="categories">
        <NuxtLink
          v-for="category in categories"
          :key="category.title"
          :to="category.link"
          class="categories__card"
          :style="`background-color: ${category.color}`"
        >
          {{ category.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 80px;
}

.colorbox {
  background-color: var(--orange);
  border-radius: 6px;
  padding: 30px 40px;
  width: 100%;
}

.colorbox__title {
  letter-spacing: 1px;
  text-decoration: underline;
  text-underline-offset: 10px;
}

.colorbox__grid {
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
  filter: brightness(1.5);
}
</style>
