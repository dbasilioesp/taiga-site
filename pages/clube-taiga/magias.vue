<script setup>
import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import truques from "~/utils/magias/truques";
import nivel1 from "~/utils/magias/nivel1";

const breads = [
  { link: "/clube-taiga", label: "Clube Taiga" },
  { link: `/clube-taiga/magias`, label: "Magias" },
];

const selectedMagics = ref([]);
const selectedClass = ref("");
const classes = [
  "Barbáro",
  "Bardo",
  "Bruxa",
  "Clériga",
  "Druida",
  "Feiticeira",
  "Guerreiro",
  "Ladino",
  "Paladina",
  "Patrulheiro",
  "Mago",
  "Monge",
];
const classOptions = [
  { label: "Todas classes", value: "-" },
  ...classes.map((item) => ({ label: item, value: item })),
];

const FONT_SIZES = {
  MINOR: 10,
  BASE: 12,
  TITLE: 18,
};

async function generatePDF() {
  if (selectedMagics.value.length == 0) {
    alert("Selecione as magias primeiro!");
    return;
  }

  const fontGothamBlack = await fetch("/fonts/Gotham-Black.otf").then((res) =>
    res.arrayBuffer()
  );
  const fontGaramond = await fetch("/fonts/EBGaramond-Regular.ttf").then(
    (res) => res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  const baseFont = await pdfDoc.embedFont(fontGaramond);
  const baseFontBold = await pdfDoc.embedFont(fontGothamBlack);

  const page = pdfDoc.addPage();

  const FontSet = {
    Title: {
      font: baseFontBold,
      size: FONT_SIZES.TITLE,
    },
    Base: {
      font: baseFont,
      size: FONT_SIZES.BASE,
      lineHeight: FONT_SIZES.BASE * 1.1,
    },
    Minor: {
      font: baseFontBold,
      lineHeight: FONT_SIZES.BASE * 1.1,
      size: FONT_SIZES.MINOR,
    },
  };

  const magicsFiltered = [
    ...truques.filter((i) => selectedMagics.value.includes(i.Titulo)),
    ...nivel1.filter((i) => selectedMagics.value.includes(i.Titulo)),
  ];

  drawPDF(page, pdfDoc, magicsFiltered, FontSet);

  const pdfBytes = await pdfDoc.save();
  var bytes = new Uint8Array(pdfBytes); // pass your byte response to this constructor
  var blob = new Blob([bytes], { type: "application/pdf" }); // change resultByte to bytes

  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.target = "__blank";
  link.download = "Magias.pdf";
  link.click();
}

function breakTextInLines(baseText, baseFont, maxWidth) {
  const parts = baseText.split(" ");
  let lines = 1;

  let bufferText = "";
  let finalText = "";
  let textWidth = 0;

  for (const part of parts) {
    const breakLines = (part.match(/\n/g) || []).length;

    if (breakLines) {
      lines += breakLines;
      finalText += bufferText + part;
      bufferText = " ";
      continue;
    }

    const temp = bufferText + part;
    textWidth = baseFont.widthOfTextAtSize(temp, FONT_SIZES.BASE);

    if (textWidth < maxWidth) {
      bufferText += part + " ";
    } else {
      lines += 1;
      finalText += bufferText + "\n";
      bufferText = part + " ";
    }
  }

  finalText += bufferText;

  return { text: finalText, lines };
}

function drawPDF(page, pdfDoc, magics, FontSet) {
  const { width, height } = page.getSize();

  page.moveTo(40, height - 4 * FONT_SIZES.BASE);

  for (let index = 0; index < magics.length; index++) {
    const magia = magics[index];

    const head =
      `T.Conj: ${magia.TempoConj} | ` +
      `Alcance: ${magia.Alcance} | ` +
      `Componentes: ${magia.Componentes} | ` +
      `Duração: ${magia.Duracao}`;

    const maxWidth = width - 10 - 8 * FONT_SIZES.BASE;
    const prepText = breakTextInLines(
      magia.Descricao,
      FontSet.Base.font,
      maxWidth
    );

    // #region NEW PAGE
    const linesHeight = prepText.lines * FONT_SIZES.BASE;
    const measureHeight = linesHeight + FONT_SIZES.TITLE * 3;

    if (page.getPosition().y - measureHeight < 50) {
      const newPage = pdfDoc.addPage();
      const newMagias = magics.slice(index);

      if (newMagias.length > 0) {
        drawPDF(newPage, pdfDoc, newMagias, FontSet);
      }
      return;
    }
    // #endregion

    // Title
    page.drawText(magia.Titulo, FontSet.Title);
    page.moveDown(FONT_SIZES.TITLE);

    // Head
    page.drawText(head, FontSet.Minor);
    page.moveDown(FONT_SIZES.BASE * 1.5);

    // Description
    page.drawText(prepText.text, FontSet.Base);
    page.moveDown((prepText.lines + 1) * FONT_SIZES.BASE);

    // Material
    if (magia.Material) {
      const prefix = "Material: ";
      const paddRight =
        FontSet.Base.font.widthOfTextAtSize(prefix, FONT_SIZES.BASE) + 6;
      page.drawText(prefix, { ...FontSet.Minor, font: FontSet.Title.font });
      page.moveRight(paddRight);
      page.drawText(magia.Material, FontSet.Base);
      page.moveLeft(paddRight);

      page.moveDown(FONT_SIZES.MINOR);
    }

    // Escola
    const pos = page.getPosition();
    page.drawText(magia.Escola.toUpperCase(), {
      ...FontSet.Minor,
      rotate: degrees(90),
      opacity: 0.5,
      x: pos.x - 10,
      y: pos.y + (magia.Material ? 10 : 16),
    });

    page.moveDown(FONT_SIZES.TITLE * 2);
  }
}

const truquesMap = computed(() => {
  if (selectedClass.value && selectedClass.value != "-") {
    return truques.filter((i) => i.Classes.includes(selectedClass.value));
  }

  return truques;
});

const nivel1Map = computed(() => {
  if (selectedClass.value && selectedClass.value != "-") {
    return nivel1.filter((i) => i.Classes.includes(selectedClass.value));
  }

  return nivel1;
});

watch(selectedClass, () => (selectedMagics.value = []));
</script>

<template>
  <UIPageContainer class="page">
    <UIBreadcrumbs :items="breads" class="mb-9" />

    <section class="article">
      <h1>Magias</h1>

      <div>
        <div class="filterPanel">
          <InputSelect
            v-model="selectedClass"
            :items="classOptions"
            placeholder="Filtrar por classe"
          />
          <button type="button" class="buttonPrimary" @click="generatePDF">
            Gerar PDF
          </button>
        </div>

        <h3 class="magicGroupTitle">Truques</h3>
        <div class="rollGrid" style="--min: 220px; --mt: 20px">
          <InputMagicSelect
            v-for="magia in truquesMap"
            :key="magia.Titulo"
            :magia="magia"
            v-model="selectedMagics"
          />
        </div>

        <h3 class="magicGroupTitle">Nivel 1°</h3>
        <div class="rollGrid" style="--min: 220px; --mt: 20px">
          <InputMagicSelect
            v-for="magia in nivel1Map"
            :key="magia.Titulo"
            :magia="magia"
            v-model="selectedMagics"
          />
        </div>
      </div>
    </section>
  </UIPageContainer>
</template>

<style>
.filterPanel {
  display: flex;
  gap: 20px;
  align-items: center;

  select {
    width: auto;
  }
}

.magicGroupTitle {
  margin-top: 30px;
}

.debug {
  position: fixed;
  z-index: 1;
  left: 20px;
  bottom: 40px;
  width: 600px;
  font-size: 11px;

  text-overflow: ellipsis;
  overflow: auto;
  height: 100px;
  background-color: white;
  border-radius: 4px;
  padding: 10px;
}
</style>
