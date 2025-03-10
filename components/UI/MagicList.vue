<script setup lang="js">
const selectedMagics = defineModel()
defineProps({
    label: String,
    magics: Array
})
</script>

<template>
  <h3 class="magicGroupTitle">{{ label }}</h3>
  <div class="rollGrid" style="--min: 220px; --mt: 20px">
    <InputMagicSelect
      v-for="magic in magics"
      :key="magic.Titulo"
      :magia="magic"
      v-model="selectedMagics"
    />
  </div>
</template>

<style scoped>
.magicGroupTitle {
  margin-top: 30px;
}
</style>
