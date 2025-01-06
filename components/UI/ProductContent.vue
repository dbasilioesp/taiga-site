<script setup>
defineProps({
  image: String,
  description: String,
  tags: Array,
  doc: Object,
});
</script>

<template>
  <div class="content">
    <NuxtImg :src="image" width="400" format="webp" quality="80" alt="" />
    <div class="content__content">
      <div class="content__tags mb-4" v-if="tags.length">
        <UITag v-for="tag in tags" :key="tag">{{ tag }}</UITag>
      </div>
      <h2 class="topicTitle2 textGrey">Resumo</h2>
      <div class="content__desc" v-html="description" v-if="description"></div>
      <ContentRenderer :value="doc" v-if="doc" class="article" />
      <div v-if="doc?.autores" class="my-8 text-lg">
        <b>Escrito por</b>: {{ doc.autores }}.
      </div>
      <UIVolumeTable
        v-if="doc?.volumes"
        :volumes="doc.volumes"
        class="content__volumes"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  gap: 40px;
}

.content__content {
  max-width: 60ch;
}

.content__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.content > img {
  object-fit: contain;
  align-self: start;
  max-width: 50%;
  border-radius: 10px;
}

.content__volumes {
  margin-top: 20px;
}

@media (max-width: 600px) {
  .content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
