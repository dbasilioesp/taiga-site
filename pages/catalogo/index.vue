<script setup>
useSeoMeta({ title: "Catálogo" });

const books = ref([]);
const mangas = ref([]);
const rpgs = ref([]);
const switchBook = ref(true);
const switchManga = ref(true);
const switchRPG = ref(true);

const breads = [{ link: "/catalogo", label: "Catálogo" }];

useAsyncData("livros", () => queryContent("livros").find()).then(
  ({ data }) => (books.value = data.value)
);

useAsyncData("mangas", () => queryContent("mangas").find()).then(
  ({ data }) => (mangas.value = data.value)
);

useAsyncData("rpgs", () => queryContent("rpgs").find()).then(
  ({ data }) => (rpgs.value = data.value)
);

const all = computed(() => {
  const booksDrop = books.value.filter((i) => i.imagem);
  const mangasDrop = mangas.value.filter((i) => i.imagem);
  const rpgsDrop = rpgs.value.filter((i) => i.imagem);

  let all = [];
  if (switchBook.value) all = [...booksDrop];
  if (switchManga.value) all = [...all, ...mangasDrop];
  if (switchRPG.value) all = [...all, ...rpgsDrop];

  all.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return all;
});

function getLink(item) {
  let slug = "";
  let category = "";
  const split = item._path.split("/");

  slug = split[split.length - 1];
  category = split[1];

  return `/catalogo/${category}-${slug}`;
}
</script>

<template>
  <UIPageContainer>
    <UIBreadcrumbs :items="breads" />

    <!-- <h1 class="pageTitle orange">Catálogo</h1> -->

    <div class="flex gap-2 my-8">
      <UIToggle label="Livros" v-model="switchBook" />
      <UIToggle label="Mangás" v-model="switchManga" />
      <UIToggle label="RPGs" v-model="switchRPG" />
    </div>

    <div class="page__list figureGrid mb-10">
      <TransitionGroup>
        <UIBookCard
          v-for="item in all"
          :key="item.title"
          :title="item.title"
          :author="item.autores"
          :image="item.imagem"
          :link="getLink(item)"
        />
      </TransitionGroup>
    </div>
  </UIPageContainer>
</template>

<style scoped>
.page__list {
  min-height: 40vh;
}
</style>
