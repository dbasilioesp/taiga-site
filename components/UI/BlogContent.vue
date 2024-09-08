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
      <UITag v-for="tag in tags" :key="tag">{{ tag }}</UITag>
    </div>
    <div>
      <NuxtImg
        :src="image"
        v-if="image"
        width="400"
        format="webp"
        quality="80"
        alt=""
        class="blog__banner mb-4"
      />
      <div>
        <b>Data da postagem</b>
        : {{ doc.date }}
      </div>
      <div>
        <b>Autores</b>
        : {{ doc.autores.join(", ") }}
      </div>
    </div>
    <div>
      <div class="blog__text">
        <div class="blog__desc" v-html="description" v-if="description"></div>
        <ContentRenderer :value="doc" v-if="doc" class="article" />
      </div>
    </div>
  </div>
</template>

<style>
.blog {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog__banner {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  align-self: start;
  border-radius: 10px;
}

.blog__text {
  max-width: 100ch;
  width: 100%;
}

.blog__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
