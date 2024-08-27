<script setup>
defineProps({
  volumes: Array,
});
</script>

<template>
  <div>
    <h3 class="text-xl font-medium mb-4 roboto">Volumes:</h3>
    <details
      v-for="(volume, idx) in volumes"
      :key="volume.volume"
      :open="idx == 0"
      class="mb-4"
    >
      <summary class="cursor-pointer roboto">
        {{ volume.volume }}. {{ volume.title }}
      </summary>
      <ul class="mt-2">
        <li
          v-for="chapter in volume.chapters"
          :key="chapter"
          class="roboto text-sm"
        >
          {{ chapter }}
        </li>
      </ul>
    </details>
  </div>
</template>

<style></style>
