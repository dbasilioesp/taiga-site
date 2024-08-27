<script setup>
const props = defineProps({
  home: Boolean,
});
</script>

<template>
  <footer class="footer" :class="{ home }">
    <div class="footer__inner cbase">
      <p class="text-base white">
        Localização: Rua Gavião, 880 - Alvorada - RS.<br />
        Telefone: 51 98484.1686
      </p>
      <div>
        <a
          href="https://www.instagram.com/livrariataiga/"
          target="_blank"
          class="footer__social"
        >
          <IconInstagram width="36px" height="36px" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 30px 40px;
  background-color: var(--darkgrey);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.footer.home .footer__inner {
  align-items: center;
  text-align: center;
}

.footer__social {
  color: white;
  transition: all 0.3s;
}

.footer__social:hover {
  color: var(--yellow);
}
</style>
