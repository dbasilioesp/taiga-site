<script setup>
const attributes = [
  { label: "Força", value: 8 },
  { label: "Destreza", value: 15 },
  { label: "Constituição", value: 10 },
  { label: "Inteligência", value: 10 },
  { label: "Sabedoria", value: 14 },
  { label: "Carisma", value: 14 },
];
</script>

<template>
  <UIPageContainer class="fichaOut">
    <section class="ficha">
      <aside class="ficha__aside">
        <img src="/images/fichas/art.webp" alt="Art" />
      </aside>
      <main>
        <h1 class="pageTitle orange">Art Flowers</h1>

        <h2 class="sectionTitle">Atributos</h2>
        <div class="ficha__atributos">
          <div
            class="ficha__atributosItem"
            v-for="attr in attributes"
            :key="attr.label"
          >
            <span>{{ attr.label }}</span>
            <span class="text-2xl">{{ attr.value }}</span>
          </div>
        </div>

        <div class="ficha__gridA">
          <div>
            <h2 class="sectionTitle">Dados</h2>
            <div><b>Jogador:</b> Lucas</div>
            <div><b>Classe:</b> Ladino 1</div>
            <div><b>Raça:</b> Meio Elfo</div>
            <div><b>Antecedente:</b> Charlatão</div>
            <div><b>Tendência:</b> Caótico e Bom</div>
            <div><b>Idade:</b> 20 anos</div>
            <div><b>Olhos:</b> Verdes</div>
            <div><b>Altura:</b> 1,75m</div>
            <div><b>Peso:</b> 35kg</div>
            <div><b>Cabelos:</b> Castanho claro</div>
            <div><b>Pele:</b> Branca</div>
          </div>
          <div>
            <h2 class="sectionTitle">Perícias</h2>
            <div><b>Acrobácia:</b> +5</div>
            <div><b>Atuação:</b> +4</div>
            <div><b>Furtividade:</b> +7</div>
            <div><b>Intuição:</b> +4</div>
            <div><b>Investigação:</b> +4</div>
            <div><b>Medicina:</b> +4</div>
            <div><b>Persuasão:</b> +6</div>
            <div><b>Prestigitação:</b> +5</div>
          </div>
          <div>
            <h2 class="sectionTitle">Pontuação</h2>
            <div><b>Pontos de Vida:</b> 8</div>
            <div><b>Classe de Armadura:</b> 15 (+3 destreza, +2 armadura)</div>
            <h2 class="sectionTitle">Armas</h2>
            <div><b>Rapieira:</b> +5, 1d8 de dano</div>
            <div><b>Arco Curto:</b> +5, 1d6 de dano</div>
            <div><b>Adaga:</b> +5, 1d4 de dano</div>
          </div>
          <div>
            <h2 class="sectionTitle">Equipamentos</h2>
            <div>
              <div><b>Geral</b>: Mochila, 15m orda de seda e um arpéu</div>
              <b>Kits</b>: kit de ladrão, kit de disfarce, kit de falsificação,
              2 kit de primeiro socorros.
              <div><b>Armas</b>: Arco curto 24/96, Rapieira, Adaga 6/18.</div>
              <div><b>Especial</b>: Fantasia de Alex.</div>
            </div>
          </div>
          <div>
            <h2 class="sectionTitle">Antecedentes</h2>
            <div>
              <div><b>Traços de Personalidade:</b> Calmo e caótico</div>
              <div><b>Ideais:</b> Amizade em primeiro lugar</div>
              <div><b>Ligações:</b> Aliado de uma bruxa dívida de vida.</div>
              <div><b>Defeitos:</b> Distraído.</div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="sectionTitle">História</h2>

          <div class="article">
            <p>
              Vamos começar do começo, né? Minha mãe era uma elfa muito querida,
              ela conheceu um humano, eles tiveram um caso de uma noite, foi aí
              onde tudo começou. Mas isso foi o cúmulo na vila, aí ela decidiu
              se mudar para uma cidade muito grande, só que no fim lá era bem
              preconceituosa, eles não gostavam dos elfos.
            </p>
            <p>
              Mas, infelizmente, eu não pude conhecer minha mãe; ela morreu no
              meu parto. Acabei indo para o orfanato e eles não gostaram nem um
              pouco de mim. Aí eu decidi fugir com 16 anos, foi aí que a
              maionese começou a desandar.
            </p>
            <p>
              Virei um viajante do nada, sem rumo; eu não tinha nada, só um
              pequeno arco. Até que eu fui para Jardim Alegre, cidade dos
              ricaços. Comecei a roubar, a mentir e a me meter em várias
              confusões até que um dia eu achei uma bruxa do Norte. Péssima
              ideia tentar roubar ela.
            </p>
            <p>
              Eu pedi desculpas, ela aceitou e nos tornamos amigos. Ela me pediu
              a minha ajuda; tinham alguns caçadores atrás dela só porque ela
              jogou uma maldição neles e eles queriam a cabeça dela. Eu falei
              para ela que eu ajudaria. Depois de ajudá-la, ela me deu uma
              espada; não é bem uma espada, tá? Mas por uma agulha grande. Ela
              falou que combinava comigo; eu achei um pouco estranho, mas ela
              era divertida.
            </p>
            <p>
              A gente ficou junto até os meus 17 anos; ela foi chamada para uma
              missão do conselho das bruxas, aí a gente seguiu carreira solo.
              Foi assim que eu virei um viajante com uma espada, um arco e me
              metendo em várias confusões durante o caminho e ajudando as
              pessoas. Claro que eu sou um mentiroso, mas eu uso isso para o
              bem; eu gosto bastante de brincar com as pessoas.
            </p>
            <p>
              Mas no decorrer das minhas viagens eu aprendi bastante coisas; uma
              médica me ensinou a fazer curativos, também a moça do teatro me
              ensinou a atuar, ou o garoto que me ensinou a nadar, a moça que me
              ensinou acrobacias incríveis. Aprendi bastante coisas, mas eu
              nunca vou esquecer da bruxa. Mas você deve estar se perguntando o
              nome dela, né? O nome dela é Íris Moon.
            </p>
          </div>

          <h2 class="sectionTitle">Habilidades</h2>
          <div>
            <h3 class="topicTitle">Ataque Furtivo</h3>
            <p>
              Uma vez por turno, você pode adicionar 1d6 nas jogadas de dano
              contra qualquer criatura que acertar, desde que tenha vantagem nas
              jogadas de ataque. O ataque deve ser com uma arma de acuidade ou à
              distância. Você não precisa ter vantagem nas jogadas de ataque se
              outro inimigo do seu alvo estiver a 1,5 metro de distância dele,
              desde que este inimigo não esteja incapacitado e você não tenha
              desvantagem nas jogadas de ataque.
            </p>
          </div>

          <h2 class="sectionTitle">Anotações</h2>
          <p>
            <b>Identidade Falsa</b>: Sir Alex III de Jardim Alegre, Cavaleiro
            juramentado á Stevius Joiosa duque de Jardim Alegre.
          </p>
        </div>
      </main>
    </section>
  </UIPageContainer>
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
}
</style>
