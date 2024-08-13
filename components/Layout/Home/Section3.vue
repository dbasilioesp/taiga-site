<script></script>

<template>
  <div class="sectionC">
    <NuxtLink class="sectionC__col sectionC__books" to="/livros">
      <span>Livros</span>
    </NuxtLink>

    <NuxtLink class="sectionC__col sectionC__mangas" to="/mangas">
      <span>Mangás</span>
    </NuxtLink>

    <NuxtLink class="sectionC__col sectionC__rpgs" to="/rpgs">
      <span>RPGs</span>
    </NuxtLink>
  </div>
</template>

<style>
.sectionC {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 600px;
  place-items: center;
}

.sectionC__col {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
}

.sectionC__col span {
  position: relative;
  font-size: 48px;
  color: var(--yellow);
  font-weight: bold;
}

.sectionC__col span::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 1px;
  height: 2px;
  width: 0;
  border-radius: 4px;
  background-color: var(--orange);
  transition: width 0.3s ease-out;
}

.sectionC__col:hover span:before {
  width: 100%;
}

.sectionC__books {
  padding: 1px;
  height: 100%;
  width: 100%;
  background-image: var(--overlayGray), url("~/assets/images/Roxo.jpeg");
  background-size: cover;
  background-position: center;
}

.sectionC__mangas {
  padding: 1px;
  height: 100%;
  width: 100%;
  background-image: var(--overlayGray), url("~/assets/images/boruto.jpg");
  background-size: cover;
  background-position: center;
}

.sectionC__rpgs {
  padding: 1px;
  height: 100%;
  width: 100%;
  background-image: var(--overlayGray),
    url("~/assets/images/ordem_paranormal.jpg");
  background-size: cover;
  background-position: center;
}
</style>
