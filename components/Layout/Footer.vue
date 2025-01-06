<script setup></script>

<template>
  <footer class="footer">
    <div class="cbase">
      <h3 class="pageTitle">Onde nos encontrar</h3>
      <div class="footer__wrap">
        <div>
          <p>
            Atuamos pelos bairros de Alvorada como vendedores ambulantes.
            Divulgaremos pelas redes sociais o local e data que estaremos
            vendendo.
          </p>
        </div>
        <div>
          <p class="text-base white mb-4">Telefone: 51 98484.1686</p>
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
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 80px 0 180px;
  background-color: var(--darkgrey);
  color: white;
}

.footer__wrap {
  display: grid;
  grid-template-columns: 50ch 1fr;
  justify-content: center;
  gap: 60px;
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

@media (max-width: 1200px) {
  .footer__wrap {
    display: flex;
    flex-direction: column;
  }
}
</style>
