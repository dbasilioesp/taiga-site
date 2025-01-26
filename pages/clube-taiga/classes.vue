<script setup>
const breads = [
  { link: "/clube-taiga", label: "Clube Taiga" },
  { link: `/clube-taiga/classes`, label: "Lista de Classes" },
];
</script>

<template>
  <UIPageContainer class="page">
    <UIBreadcrumbs :items="breads" class="mb-9" />

    <section class="article">
      <h1>Lista de Classes</h1>

      <div class="rollGrid">
        <UIRollCard
          :item="item"
          :index="index"
          v-for="(item, index) in CLASSES"
          :key="item.name"
        />
      </div>
    </section>
  </UIPageContainer>
</template>
