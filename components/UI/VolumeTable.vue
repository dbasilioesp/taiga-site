<script setup>
defineProps({
  volumes: Array,
});
</script>

<template>
  <table class="volumeTable">
    <thead>
      <tr>
        <th>Capítulos</th>
        <th class="volumeTable__col3">Volume</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="volume in volumes" :key="volume.volume">
        <td style="text-align: left">
          <ul>
            <li v-for="(chapter, idx) in volume.chapters" :key="chapter">
              {{ idx + 1 }}. {{ chapter }}
            </li>
          </ul>
        </td>
        <td>
          <div>{{ volume.volume }}</div>
          <div v-if="volume.title">{{ volume.title }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.volumeTable {
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}

.volumeTable :is(td, th) {
  border: 1px solid var(--lilas);
  border-radius: 2px;
  padding: 5px 20px;
}

.volumeTable__col1 {
  width: 30%;
}

.volumeTable__col2 {
  width: 10%;
}
</style>
