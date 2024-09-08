<script setup>
const breads = [{ link: "/rpgs", label: "RPGs" }];

useSeoMeta({
  title: "RPGs",
});
</script>

<template>
  <UIPageContainer>
    <UIBreadcrumbs :items="breads" />

    <h1 class="text-7xl orange font-bold mb-8">RPGs</h1>

    <div class="baseGrid">
      <UIBookCard
        v-for="item in rpgs"
        :key="item.nome"
        :title="item.nome"
        :author="item.autores"
        :image="item.imagem"
        :link="`/rpgs/${item.slug}`"
      />
    </div>
  </UIPageContainer>
</template>

<style scoped></style>
