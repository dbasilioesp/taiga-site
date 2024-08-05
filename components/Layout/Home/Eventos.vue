<template>
  <div class="section">
    <h2 class="title-base text-7xl font-bold yellow shadow-text">Eventos</h2>
    <p class="section__desc text-xl font-medium white text-center">
      Também queremos ser um ponto de encontro daqueles que gostam de jogar
      jogos de tabuleiro, entre eles RPGs de mesa e jogos de cartas mágicas.
    </p>
  </div>
</template>

<style scoped>
.section {
  display: grid;
  place-items: center;
  gap: 30px;
  padding: 170px 40px;
  background-image: var(--overlayPurple), url("~/assets/images/bg-eventos.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.section__desc {
  max-width: 500px;
  width: 100%;
  text-wrap: pretty;
}
</style>
