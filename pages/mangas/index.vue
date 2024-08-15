<script setup>
const breads = [{ link: "/mangas", label: "Mangás" }];

useSeoMeta({
  title: "Mangás",
});
</script>

<template>
  <div class="page py-9">
    <div class="cbase">
      <UIBreadcrumbs :items="breads" />

      <h1 class="text-7xl orange font-bold mb-4">Mangás</h1>
      <p class="mb-8 text-lg">
        Muitos dos mangás que temos são Shonnen, mas aos poucos vamos equilibrar
        com outros genêros.
      </p>
      <div class="base-grid">
        <UIBookCard
          v-for="item in mangas"
          :key="item.nome"
          :title="item.nome"
          :author="item.autores"
          :image="item.imagem"
          :link="`/mangas/${item.slug}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
