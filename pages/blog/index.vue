<script setup>
useSeoMeta({
  title: "Blog",
});

const { data } = await useAsyncData("blog", () =>
  queryContent("blog").sort({ title: 1 }).find()
);
const posts = data.value;

const breads = [{ link: "/blog", label: "Blog" }];
</script>

<template>
  <UIPageContainer>
    <UIBreadcrumbs :items="breads" />
    <h1 class="text-7xl orange font-bold mb-4">Blog</h1>
    <p class="mb-8 text-lg">
      Postamos aqui conteúdos que vão ajudar a entender melhor a Taiga.
    </p>
    <ul class="max-w-96">
      <li v-for="post in posts" :key="post.title" class="post__item">
        <a :href="post._path" class="link text-2xl">{{ post.title }}</a>
        <p>{{ post.description }}</p>
        <p>
          <small>{{ post.date }}</small>
        </p>
      </li>
    </ul>
  </UIPageContainer>
</template>

<style scoped>
.post__item:not(:first-child) {
  border-top: 2px solid var(--orange);
}
.post__item {
  padding-block: 20px;
}
</style>
