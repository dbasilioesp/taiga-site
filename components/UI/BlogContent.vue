<script setup>
defineProps({
    image: String,
    description: String,
    tags: Array
})
</script>

<template>
  <div class="blog-content flex gap-10">
    <img :src="image" width="400" alt="" />
    <div>
      <div class="blog-content__grid mb-4">
        <UITag v-for="tag in tags" :key="tag">{{ tag }}</UITag>
      </div>
      <div class="blog-content" v-html="description"></div>
    </div>
  </div>
</template>

<style>
.blog-content__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.blog-content p {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
}
</style>