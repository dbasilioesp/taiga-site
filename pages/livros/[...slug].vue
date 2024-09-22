<script setup>
const route = useRoute();

function getBreads(doc) {
  return [
    { link: "/livros", label: "Livros" },
    { link: `/livros/${route.params.slug}`, label: doc.title },
  ];
}
</script>

<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <div class="page pt-10 pb-14">
        <div class="cbase">
          <UIBreadcrumbs :items="getBreads(doc)" />
          <h1
            class="page__title text-5xl pt-4 pb-8 font-bold orange capitalize"
          >
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
            Livro não encontrado.
          </h1>
        </div>
      </div>
    </template>
  </ContentDoc>
</template>
