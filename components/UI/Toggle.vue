<script setup>
const toggle = defineModel();

defineProps({
  label: String,
});
</script>

<template>
  <button
    @click="toggle = !toggle"
    type="button"
    class="toggle"
    :class="{ isActive: toggle }"
  >
    {{ label }} <IconCheck v-if="toggle" />
  </button>
</template>

<style scoped>
/* toggle */
.toggle {
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  background-color: var(--textGrey);
  transition: all 300ms linear;
  color: white;
  padding: 0 16px;
}

.toggle.isActive {
  background-color: var(--orange);
}
</style>
