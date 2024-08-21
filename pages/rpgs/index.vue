<script setup>
const breads = [{ link: "/rpgs", label: "RPGs" }];

useSeoMeta({
  title: "RPGs",
});
</script>

<template>
  <div class="page py-9">
    <div class="cbase inline-size">
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
    </div>
  </div>
</template>

<style scoped></style>
