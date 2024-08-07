<script setup>
const props = defineProps({
  title: String,
  author: String,
  image: String,
  light: Boolean,
});
</script>

<template>
  <div class="card" :class="{ light }">
    <img class="card__image" :src="props.image" alt="" />
    <h2 class="card__title">{{ props.title }}</h2>
    <span class="card__author font-semibold">{{ props.author }}</span>
  </div>
</template>

<style scoped>
.card {
  max-width: 200px;
  color: var(--darkgrey);
}

.card.light {
  color: white;
}

.card__image {
  width: 200px;
  height: 250px;
  object-fit: contain;
  object-position: left;
  border-radius: 4px;
}

.card__title {
  margin-top: 10px;
  margin-bottom: 2px;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  color: inherit;
}

.card__author {
  color: inherit;
}
</style>
