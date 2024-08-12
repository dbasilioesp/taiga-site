<script setup>
const route = useRoute();
const book = books.find((i) => i.slug == route.params.slug);

const breads = [
  { link: "/livros", label: "Livros" },
  { link: `/livros/${route.params.slug}`, label: book.nome }
];
</script>

<template>
  <div class="page pt-10 pb-14">
    <div class="cbase">
      <UIBreadcrumbs :items="breads" />

      <h1 class="page__title text-5xl pt-4 pb-6 font-bold orange capitalize">
        {{ book.nome }}
      </h1>
      <UIBlogContent
        :image="book.imagem"
        :tags="book.tags"
        :description="book.descricao"
      />
    </div>
  </div>
</template>
