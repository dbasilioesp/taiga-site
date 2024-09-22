<script setup>
defineProps({
  image: String,
  description: String,
  tags: Array,
  doc: Object,
});
</script>

<template>
  <div class="blog">
    <div class="blog__grid">
      <div>
        <div class="blog__tags">
          <UITag v-for="tag in tags" :key="tag">{{ tag }}</UITag>
        </div>

        <div class="mb-4">
          <b>Data da postagem</b>
          : {{ doc.date }}<br />

          <b>Autores</b>
          : {{ doc.autores.join(", ") }}
        </div>
        <div class="blog__text">
          <div class="blog__desc" v-html="description" v-if="description"></div>
          <ContentRenderer :value="doc" v-if="doc" class="article" />
        </div>
      </div>

      <NuxtImg
        :src="image"
        v-if="image"
        width="400"
        format="webp"
        quality="80"
        alt=""
        ku
        class="blog__banner mb-4"
      />
    </div>
  </div>
</template>

<style>
.blog {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog__tags {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.blog__banner {
  width: 100%;
  object-fit: cover;
  object-position: center bottom;
  border-radius: 10px;
}

.blog__text {
  max-width: 100ch;
  width: 100%;
}

.blog__grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
}

.blog__volumes {
  margin-top: 20px;
}

@media (max-width: 600px) {
  .blog {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
