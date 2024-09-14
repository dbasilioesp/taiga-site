<script setup>
const props = defineProps({
  ficha: Object,
});
</script>

<template>
  <section class="ficha">
    <aside class="ficha__aside">
      <img :src="ficha.imagem" :alt="ficha.nome" />
    </aside>
    <main>
      <h1 class="pageTitle orange">{{ ficha.nome }}</h1>

      <h2 class="sectionTitle">Atributos</h2>
      <div class="ficha__atributos">
        <div
          class="ficha__atributosItem"
          v-for="attr in ficha.atributos"
          :key="attr.label"
        >
          <span>{{ attr.label }}</span>
          <span class="text-2xl">{{ attr.value }}</span>
        </div>
      </div>

      <div class="ficha__gridA">
        <div>
          <h2 class="sectionTitle">Dados</h2>
          <div><b>Jogador:</b> {{ ficha.jogador }}</div>
          <div><b>Classe:</b> {{ ficha.classe }}</div>
          <div><b>Raça:</b> {{ ficha.raca }}</div>
          <div><b>Antecedente:</b> {{ ficha.antecedente.nome }}</div>
          <div><b>Tendência:</b> {{ ficha.tendencia }}</div>
          <div><b>Idiomas:</b> {{ ficha.idiomas }}</div>
          <div><b>Idade:</b> {{ ficha.idade }}</div>
          <div><b>Olhos:</b> {{ ficha.olhos }}</div>
          <div><b>Altura:</b> {{ ficha.altura }}</div>
          <div><b>Peso:</b> {{ ficha.peso }}</div>
          <div><b>Cabelos:</b> {{ ficha.cabelo }}</div>
          <div><b>Pele:</b> {{ ficha.pele }}</div>
        </div>
        <div>
          <h2 class="sectionTitle">Perícias</h2>
          <div v-for="data in ficha.pericias" :key="data.label">
            <b>{{ data.nome }}:</b> {{ data.valor }}
          </div>
        </div>
        <div>
          <h2 class="sectionTitle">Pontuação</h2>
          <div><b>Pontos de Vida:</b> {{ ficha.vida }}</div>
          <div><b>Classe de Armadura:</b> {{ ficha.classeArmadura }}</div>
          <h2 class="sectionTitle">Armas</h2>

          <div v-for="arma in ficha.armas" :key="arma">
            <b>{{ arma.nome }}:</b> {{ arma.valor }}
          </div>
        </div>
        <div>
          <h2 class="sectionTitle">Equipamentos</h2>
          <div>
            <div><b>Geral</b>: {{ ficha.equips.geral }}</div>
            <b>Kits</b>: {{ ficha.equips.kits }}
            <div><b>Armas</b>: {{ ficha.equips.armas }}</div>
            <div><b>Especial</b>: {{ ficha.equips.especial }}</div>
            <div><b>Pilhagem</b>: {{ ficha.equips.pilhagem }}</div>
          </div>
        </div>
        <div v-if="ficha.antecedente">
          <h2 class="sectionTitle">Antecedentes</h2>
          <div>
            <div>
              <b>Traços de Personalidade:</b> {{ ficha.antecedente.tracos }}
            </div>
            <div><b>Ideais:</b> {{ ficha.antecedente.ideais }}</div>
            <div><b>Ligações:</b> {{ ficha.antecedente.ligacoes }}</div>
            <div><b>Defeitos:</b> {{ ficha.antecedente.defeitos }}</div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="sectionTitle">Habilidades</h2>
        <slot name="skills" />

        <div v-if="ficha.magias">
          <h2 class="sectionTitle">Magias</h2>
          <div class="ficha__magias">
            <div v-for="(level, index) in ficha.magias" :key="index">
              <h3 class="topicTitle">{{ index == 0 ? "Truques" : index }}</h3>
              <div v-for="magia in level" :key="magia">{{ magia }}</div>
            </div>
          </div>
        </div>

        <h2 class="sectionTitle">Anotações</h2>
        <slot name="anotacoes" />

        <h2 class="sectionTitle">História</h2>
        <div class="history">
          <slot name="historia" />
        </div>
      </div>
    </main>
  </section>
</template>

<style>
.fichaOut {
  container: ficha / inline-size;
}

.ficha {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 60px;
}

.ficha__gridA {
  display: grid;
  grid-template-columns: 240px 240px 240px;
  gap: 20px;
  margin-block: 20px;
}

.ficha__atributos {
  display: grid;
  grid-template-columns: repeat(6, 100px);
  gap: 10px;
}

.ficha__magias {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
}

.ficha__atributosItem {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 6px;
}

@container ficha (max-width: 1300px) {
  .ficha {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .ficha__aside {
    width: 300px;
  }
}

@container ficha (max-width: 700px) {
  .ficha__atributos {
    grid-template-columns: repeat(3, 120px);
  }

  .ficha__gridA {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  .ficha__magias {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}
</style>
