<script setup>
defineProps({
  item: Object,
  index: Number | String,
});
</script>

<template>
  <div class="card">
    <img :src="item.image" :alt="item.name" />
    <div class="card_title">{{ item.name }}</div>
    <span class="card_number">{{ index + 1 }}</span>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card img {
  height: 180px;
  object-fit: cover;
  object-position: top center;
}

.card_title {
  font-size: 1.25rem;
  font-family: var(--fontTitle);
}

.card_number {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: brown;
  color: white;
  z-index: 1;
}
</style>
