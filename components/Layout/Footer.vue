<template>
  <footer class="footer">
    <h2 class="title-base text-5xl font-bold white">Contato</h2>
    <p class="text-base white text-center">
      Localização: Rua Gavião, 880 - Alvorada - RS.<br />
      Telefone: 51 98484.16686
    </p>
  </footer>
</template>

<style scoped>
.footer {
  display: grid;
  place-items: center;
  gap: 30px;
  padding: 80px 40px;
  background-color: var(--darkgrey);
}

.footer__desc {
  max-width: 500px;
  width: 100%;
  font-weight: 500;
  text-wrap: pretty;
}
</style>
