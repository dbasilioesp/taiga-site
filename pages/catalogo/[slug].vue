<script setup>
const route = useRoute();
let slug = route.params.slug;
const index = slug.indexOf("-");
const category = slug.substring(0, index);
slug = slug.substring(index + 1, slug.length);
const path = `/${category}/${slug}`;

function getBreads(doc) {
  return [
    { link: "/catalogo", label: "Livros" },
    { link: `/catalogo/${route.params.slug}`, label: doc.title },
  ];
}
</script>

<template>
  <ContentDoc :path="path">
    <template v-slot="{ doc }">
      <div class="page pt-10 pb-14">
        <div class="cbase">
          <UIBreadcrumbs :items="getBreads(doc)" />
          <h1 class="page__title pageTitle pt-4 pb-8">
            {{ doc.title }}
          </h1>
          <UIProductContent :image="doc.imagem" :tags="doc.tags" :doc="doc" />
        </div>
      </div>
    </template>
    <template #not-found>
      <div class="page pt-10 pb-14">
        <div class="cbase">
          <h1 class="font-bold text-5xl text-center my-20 underline">
            Volume não encontrado.
          </h1>
        </div>
      </div>
    </template>
  </ContentDoc>
</template>
