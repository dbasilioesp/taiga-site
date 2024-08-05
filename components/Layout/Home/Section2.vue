<template>
  <div class="section">
    <img src="~/assets/images/frieren.jpeg" alt="Capa Frieren" />
    <img src="~/assets/images/boruto.jpg" alt="Capa Boruto" />
    <img
      src="~/assets/images/a_masmorra_da_morte.jpg"
      alt="Capa A Masmorra da Morte"
    />
    <img
      src="~/assets/images/ordem_paranormal.jpg"
      alt="Capa Ordem Paranormal"
    />
    <img src="~/assets/images/frieren.jpeg" alt="Capa Frieren" />
    <img src="~/assets/images/boruto.jpg" alt="Capa Boruto" />
    <img
      src="~/assets/images/a_masmorra_da_morte.jpg"
      alt="Capa A Masmorra da Morte"
    />
    <img
      src="~/assets/images/ordem_paranormal.jpg"
      alt="Capa Ordem Paranormal"
    />
  </div>
</template>

<style scoped>
.section {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 80px;
  padding: 40px;
  background-color: var(--orange);
  overflow-x: scroll;
}

.section::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.section img {
  display: block;
  width: 300px;
  object-fit: contain;
}

.section img:nth-child(odd) {
  margin-top: 240px;
}
</style>
