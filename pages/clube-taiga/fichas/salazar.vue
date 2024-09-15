<script setup>
import imagem from "/images/fichas/salazar.webp";

const breads = [
  { link: "/clube-taiga", label: "Clube Taiga" },
  { link: `/clube-taiga/fichas/salazar`, label: "Salazar Ankari" },
];

const ficha = {
  nome: "Salazar Ankari",
  imagem,
  atributos: [
    { label: "Força", value: 3 },
    { label: "Destreza", value: 15 },
    { label: "Constituição", value: 11 },
    { label: "Inteligência", value: 16 },
    { label: "Sabedoria", value: 14 },
    { label: "Carisma", value: 11 },
  ],
  jogador: "Alex",
  classe: "Mago 4",
  raca: "Humano",
  antecedente: {
    nome: "Eremita",
    tracos:
      "Prefiro o silêncio e a solidão, mas reconheço a necessidade de interação social em situações importantes.",
    ideais:
      "A verdade e o conhecimento são a chave para superar qualquer obstáculo. Não há fronteiras para o que estou disposto a aprender.",
    ligacoes:
      "Satanás, meu gato apareceu na noite em que perdi Camila. Desde então, ele é meu companheiro e acredito que há algo mais nele do que aparenta. Ele me guia e me consola em minha busca.",
    defeitos:
      "Frequentemente me perco em pensamentos e esqueço o que acontece ao meu redor.",
  },
  tendencia: "Neutro",
  idade: "24 anos",
  olhos: "Castanho escuro",
  altura: "1,71",
  peso: "53kg",
  cabelo: "Negros com alguns fios brancos",
  pele: "Branco",
  vida: "14",
  classeArmadura: "12 (+2 destreza)",
  idiomas: "Comum e élfico",
  pericias: [
    { nome: "Arcanismo", valor: "+5" },
    { nome: "História", valor: "+5" },
    { nome: "Medicina", valor: "+4" },
    { nome: "Religião", valor: "+5" },
  ],
  armas: [
    { nome: "Adaga", valor: "+2, 1d4 de dano" },
    { nome: "Besta de mão", valor: "+2, 1d6 de dano" },
  ],
  equips: {
    geral: "Cobertor, algibeira de pele humana, ",
    kits: "1 kit de ladrão, 1 kit de herbalismo",
    armas: "Besta de mão, Adaga 6/18, 20 virotes",
    especial:
      "1 poção de vida, 1 frasco de água benta, 1 frasco alquimico, 4 pergaminhos em branco",
    pilhagem: "1 caixa de jóias, agatha",
  },
  magias: [
    ["Prestigitação", "Proteção contra lâminas", "Raio de Fogo", "Orientação"],
    [
      "Mísseis mágicos",
      "Bom fruto",
      "Compreender Idiomas",
      "Arma Espiritual",
      "Benção",
      "Proteção contra veneno",
      "Armadura Arcana",
      "Disfarçar-se",
      "Identificar",
      "Mensagem",
      "Proteção contra o bem e o mal",
    ],
    [
      "Arma Mágica",
      "Imobilizar pessoa",
      "Invisibilidade",
      "Visão no escuro",
      "Passo nebuloso",
      "Detectar Pensamento",
    ],
  ],
};
</script>

<template>
  <UIPageContainer class="fichaOut">
    <UIBreadcrumbs :items="breads" class="mb-9" />
    <UIFicha :ficha="ficha">
      <template #historia>
        <p>
          Salazar perdeu os pais para uma doença incurável (até onde se sabia)
          muito novo, entre os 8 anos de idade. Ele ficou responsável por sua
          irmã mais nova, Carmilla, que na época tinha em torno de 4 anos.
        </p>

        <p>
          Eles foram deixados em um orfanato que não era muito bom, tratavam as
          crianças mal e etc. Mas naquele orfanato havia um velhinho muito
          bondoso, que sempre tentava ajudar ele e sua irmã com o que
          precisavam. Com o passar dos anos, Carmilla acabou adoecendo, a mesma
          doença dos pais, e Salazar fazia de tudo para tentar mantê-la viva,
          estudou por anos medicina, mas percebeu que isso não adiantaria, não
          havia nada até então que o conhecimento humano pudesse fazer para
          salvar sua irmã.
        </p>

        <p>
          Até que, um dia, ele descobriu que aquele velhinho bondoso do
          orfanato, era um velho mago, não muito poderoso, mas sabia alguns
          "truques". Ele implorou para que o velhinho o introduzisse no mundo da
          magia, para que assim, de alguma forma, ele conseguisse salvar sua
          irmã. O velhinho disse que não sabia muitas coisas, mas conhecia uma
          magia que talvez ajudasse, porém ele não sabia executar, e disse para
          Salazar que ele precisaria de anos de estudos com um mago ainda mais
          poderoso para conseguir salvar sua irmã. Salazar não conhecia ninguém
          daquele lugar, além das pessoas do orfanato, apenas o velhinho, as
          outras crianças e os religiosos que os cuidavam. Além de que, não
          havia mais tempo, sua irmã estava a beira da morte, ele precisava
          fazer algo, mesmo sem experiência com magia, ele deveria tentar
          executar o feitiço. E ele tentou.
        </p>

        <p>
          Sua irmã acabou morrendo por conta da má execução do feitiço, e ele
          carrega cicatrizes até hoje, cicatrizes muito expostas em seu corpo,
          quase impossível de esconder. Naquela mesma noite, ele decidiu sair,
          buscar conhecimento, entender como poderia salvar sua irmã, ser
          poderoso o suficiente para salvar outras pessoas e talvez, trazer
          Carmilla de volta. Ele se isolou por anos, viajou por muitos lugares,
          conheceu templos, e ainda busca uma maneira de realizar seu objetivo.
          Ele também tem um gato, Satanás, que estranhamente se parece com ele,
          ele conheceu o gato na mesma noite da tragédia com sua irmã, o gato
          consolou ele, foi o único que conseguiu, e até hoje, é seu melhor
          amigo.
        </p>
      </template>
      <template #skills> </template>
      <template #anotacoes> </template>
    </UIFicha>
  </UIPageContainer>
</template>
