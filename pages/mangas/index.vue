<script setup>
const breads = [{ link: "/mangas", label: "Mangás" }];

const mangas = await useAsyncData("mangas", () =>
  queryContent("mangas").find()
);

useSeoMeta({
  title: "Mangás",
});
</script>

<template>
  <UIPageContainer>
    <UIBreadcrumbs :items="breads" />

    <h1 class="text-7xl orange font-bold mb-4">Mangás</h1>
    <p class="mb-8 text-lg">
      Muitos dos mangás que temos são Shonnen, mas aos poucos vamos equilibrar
      com outros genêros.
    </p>
    <div class="baseGrid">
      <UIBookCard
        v-for="item in mangas.data.value"
        :key="item.title"
        :title="item.title"
        :author="item.autores"
        :image="item.imagem"
        :link="item._path"
      />
    </div>
  </UIPageContainer>
</template>

<style scoped></style>
