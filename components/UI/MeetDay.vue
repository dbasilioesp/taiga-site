<script setup>
defineProps({
  meet: Array,
});
</script>

<template>
  <div>
    <h3 class="text-xl font-bold">{{ meet.date }}</h3>
    <div v-for="(group, index) in meet.groups" :key="index">
      <h4 class="font-bold mt-2">Mesa {{ index + 1 }}</h4>
      <ul class="list-inside">
        <li>Mestra: {{ group.guide }}</li>
        <li>Sistema: {{ group.system }}</li>
        <li>
          Personagens:
          <ul class="list-disc list-inside ml-5">
            <li v-for="char in group.characters" :key="char">
              {{ char }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
