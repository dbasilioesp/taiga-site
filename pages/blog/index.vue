<script setup>
useSeoMeta({
  title: "Blog",
});

const { data } = await useAsyncData("blog", () =>
  queryContent("blog").sort({ date: -1 }).find()
);
const posts = data.value.filter((i) => !i.disabled);

const breads = [{ link: "/blog", label: "Blog" }];
</script>

<template>
  <UIPageContainer class="post">
    <UIBreadcrumbs :items="breads" />
    <h1 class="pageTitle mb-4">Blog</h1>
    <p class="mb-8 text-lg">
      Postamos aqui conteúdos que vão ajudar a entender melhor a Taiga.
    </p>
    <ul class="post__grid">
      <li v-for="post in posts" :key="post.title" class="post__item">
        <a :href="post._path" class="post__imagebox dropShadow">
          <img :src="post.imagem" :alt="post.title" />
        </a>
        <a :href="post._path" class="link text-2xl">{{ post.title }}</a>
        <p>{{ post.description }}</p>
        <p>
          <small>{{ getDateLabel(post.date) }}</small>
        </p>
      </li>
    </ul>
  </UIPageContainer>
</template>

<style scoped>
.post {
  container: post / inline-size;
}

.post__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 50px;
  row-gap: 30px;
}

.post__item {
  position: relative;
  padding-block: 20px;
}

.post__imagebox {
  display: block;
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
  overflow: hidden;
}

.post__imagebox img {
  height: 300px;
  aspect-ratio: 3 / 2;
  /* border-radius: 4px; */
  /* translate: -4px -4px; */
  object-fit: cover;
  transition: all 200ms ease-out;
}

.post__item:hover img {
  scale: 1.05;
}

@container post (max-width: 680px) {
  .post__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }
}
</style>
