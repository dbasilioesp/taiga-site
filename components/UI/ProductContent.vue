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
    <div>
      <div class="content__grid mb-4" v-if="tags.length">
        <UITag v-for="tag in tags" :key="tag">{{ tag }}</UITag>
      </div>
      <h2 class="topicTitle2 orange">Resumo</h2>
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

.content__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.content > img {
  object-fit: contain;
  align-self: start;
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
