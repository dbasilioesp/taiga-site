<script setup>
const props = defineProps({
  title: String,
  author: String,
  image: String,
});
</script>

<template>
  <div class="card">
    <img class="card__image" :src="props.image" alt="" />
    <h2 class="card__title">{{ props.title }}</h2>
    <span class="card__author">{{ props.author }}</span>
  </div>
</template>

<style scoped>
.card {
}

.card__image {
    width: 200px;
    height: 250px;
    object-fit: contain;
    border-radius: 4px;
}

.card__title {
    margin-top: 10px;
    margin-bottom: 2px;
    font-size: 20px;
    font-weight: 700;
}

.card__author {
}
</style>
