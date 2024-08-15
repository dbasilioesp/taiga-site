<script setup>
defineProps({
  image: String,
  description: String,
  tags: Array,
});
</script>

<template>
  <div class="blog-content">
    <img :src="image" width="400" alt="" />
    <div>
      <div class="blog-content__grid mb-4">
        <UITag v-for="tag in tags" :key="tag">{{ tag }}</UITag>
      </div>
      <div class="blog-content__desc" v-html="description"></div>
    </div>
  </div>
</template>

<style>
.blog-content {
  display: flex;
  gap: 40px;
}

.blog-content__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.blog-content__desc p {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
}

.blog-content__desc ul {
  margin-bottom: 20px;
  padding-left: 20px;
  font-weight: 500;
}

.blog-content__desc li {
  list-style: disc;
  margin-bottom: 10px;
  font-size: 18px;
}

.blog-content > img {
  object-fit: contain;
  align-self: start;
}

@media (max-width: 600px) {
  .blog-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
