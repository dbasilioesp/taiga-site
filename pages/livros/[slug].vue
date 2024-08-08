<script setup>
const route = useRoute();
const book = books.find((i) => i.slug == route.params.slug);
console.log(book);
</script>

<template>
  <div class="page pt-10 pb-14">
    <div class="cbase">
      <div>
        <NuxtLink to="/" class="font-medium">Home</NuxtLink> &gt;
        <NuxtLink to="/livros" class="font-medium">Livros</NuxtLink> &gt;
        <NuxtLink :to="`/livros/${route.params.slug}`" class="font-bold">{{ book.nome }}</NuxtLink>
      </div>
      <h1 class="page__title text-5xl pt-4 pb-6 font-bold orange capitalize">
        {{ book.nome }}
      </h1>
      <div class="flex gap-10">
        <img :src="book.imagem" width="400" alt="">
        <div >
          <div class="blog-content" v-html="book.descricao"></div>
        </div>
      </div>
    </div>
  </div>
</template>

