<script setup>
defineProps({
  items: Array,
});
</script>

<template>
  <div class="breadcrumbs">
    <NuxtLink to="/" class="link font-medium">Home</NuxtLink> &gt;
    <template v-for="(item, index) in items">
      <NuxtLink :to="item.link" class="link font-medium capitalize">{{
        item.label
      }}</NuxtLink>
      <span v-if="index < items.length - 1">&nbsp;&gt;&nbsp;</span>
    </template>
  </div>
</template>
