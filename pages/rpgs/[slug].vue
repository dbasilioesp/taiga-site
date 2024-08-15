<script setup>
const route = useRoute();
const rpg = rpgs.find((i) => i.slug == route.params.slug);

useSeoMeta({
  title: rpg.nome,
});

const breads = [
  { link: "/rpgs", label: "RPGs" },
  { link: `/rpgs/${route.params.slug}`, label: rpg.nome },
];
</script>

<template>
  <div class="page pt-10 pb-14">
    <div class="cbase">
      <UIBreadcrumbs :items="breads" />

      <h1 class="page__title text-5xl pt-4 pb-6 font-bold orange capitalize">
        {{ rpg.nome }}
      </h1>
      <UIBlogContent
        :image="rpg.imagem"
        :tags="rpg.tags"
        :description="rpg.descricao"
      />
    </div>
  </div>
</template>
