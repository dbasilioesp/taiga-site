<script setup>
const route = useRoute();
const manga = mangas.find((i) => i.slug == route.params.slug);

const breads = [
  { link: "/mangas", label: "Mangás" },
  { link: `/mangas/${route.params.slug}`, label: manga.nome }
];
</script>

<template>
  <div class="page pt-10 pb-14">
    <div class="cbase">
      
      <UIBreadcrumbs :items="breads" />

      <h1 class="page__title text-5xl pt-4 pb-6 font-bold orange capitalize">
        {{ manga.nome }}
      </h1>
      <UIBlogContent
        :image="manga.imagem"
        :tags="manga.tags"
        :description="manga.descricao"
      />
    </div>
  </div>
</template>
