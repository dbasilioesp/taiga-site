<script setup>
const breads = [
  { link: "/clube-taiga", label: "Clube Taiga" },
  { link: `/clube-taiga/racas`, label: "Lista de Raças / Origens" },
];
</script>

<template>
  <UIPageContainer class="page">
    <UIBreadcrumbs :items="breads" class="mb-9" />

    <section class="article">
      <h1>Lista de Raças/Origens</h1>

      <div class="rollGrid">
        <UIRollCard
          :item="item"
          :index="index"
          v-for="(item, index) in ORIGINS"
          :key="item.name"
        />
      </div>
    </section>
  </UIPageContainer>
</template>
