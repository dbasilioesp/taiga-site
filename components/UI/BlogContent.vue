<script setup>
defineProps({
  image: String,
  description: String,
  tags: Array,
  doc: Object,
});
</script>

<template>
  <div class="blogContent">
    <img :src="image" width="400" alt="" />
    <div>
      <div class="blogContent__grid mb-4">
        <UITag v-for="tag in tags" :key="tag">{{ tag }}</UITag>
      </div>
      <div
        class="blogContent__desc"
        v-html="description"
        v-if="description"
      ></div>
      <ContentRenderer :value="doc" v-if="doc" class="blogContent__desc" />
      <UIVolumeTable
        v-if="doc?.volumes"
        :volumes="doc.volumes"
        class="blogContent__volumes"
      />
    </div>
  </div>
</template>

<style>
.blogContent {
  display: flex;
  gap: 40px;
}

.blogContent__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.blogContent__desc p {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
}

.blogContent__desc ul {
  margin-bottom: 20px;
  padding-left: 20px;
  font-weight: 500;
}

.blogContent__desc li {
  list-style: disc;
  margin-bottom: 10px;
  font-size: 18px;
}

.blogContent > img {
  object-fit: contain;
  align-self: start;
}

.blogContent__volumes {
  margin-top: 20px;
}

@media (max-width: 600px) {
  .blogContent {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
