<script setup>
const route = useRoute();
const manga = mangas.find((i) => i.slug == route.params.slug);
</script>

<template>
  <div class="page pt-10 pb-14">
    <div class="cbase">
      <div>
        <NuxtLink to="/" class="font-medium">Home</NuxtLink> &gt;
        <NuxtLink to="/mangas" class="font-medium">Mangas</NuxtLink> &gt;
        <NuxtLink :to="`/mangas/${route.params.slug}`" class="font-bold">{{
          manga.nome
        }}</NuxtLink>
      </div>
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
