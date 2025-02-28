<script setup>
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
const breads = [
  { link: "/clube-taiga", label: "Clube Taiga" },
  { link: `/clube-taiga/magias`, label: "Magias" },
];

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanFontBold = await pdfDoc.embedFont(
    StandardFonts.TimesRomanBold
  );

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();

  const fontSize = 12;
  const baseText = { color: rgb(0, 0, 0) };
  const titleFontSet = {
    ...baseText,
    font: timesRomanFontBold,
    size: 18,
  };
  const baseFontSet = {
    ...baseText,
    font: timesRomanFont,
    size: fontSize,
    lineHeight: fontSize * 1.1,
    maxWidth: width - 8 * fontSize,
  };

  renderMagics(page, magias.slice(0, 20));

  const pdfBytes = await pdfDoc.save();
  var bytes = new Uint8Array(pdfBytes); // pass your byte response to this constructor
  var blob = new Blob([bytes], { type: "application/pdf" }); // change resultByte to bytes

  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.target = "__blank";
  link.download = "myFileName.pdf";
  link.click();

  function prepareText(baseText, _lines) {
    const parts = baseText.split(" ");
    let lines = _lines + 1;

    let measureText = "";
    let resultText = "";
    let textWidth = 0;

    for (const part of parts) {
      const breakLines = (part.match(/\n/g) || []).length;
      if (breakLines) {
        // lines += breakLines;
        resultText += measureText + part;
        measureText = " ";
        continue;
      }

      const temp = measureText + part;
      textWidth = timesRomanFont.widthOfTextAtSize(temp, fontSize);

      if (textWidth < baseFontSet.maxWidth - 10) {
        measureText += part + " ";
      } else {
        lines += 1;
        resultText += measureText + "\n";
        measureText = part + " ";
      }
    }

    resultText += measureText;

    return { text: resultText, lines };
  }

  function renderMagics(page, magics) {
    const { width, height } = page.getSize();

    page.moveTo(40, height - 4 * fontSize);

    for (let index = 0; index < magics.length; index++) {
      const magia = magics[index];

      const head = `T.Conj: ${magia.TempoConj} | Alcance: ${magia.Alcance} | Componentes: ${magia.Componentes} | Duração: ${magia.Duracao}`;
      let breakLines = (magia.Descricao.match(/\n/g) || []).length;

      const prepText = prepareText(magia.Descricao, breakLines);

      // #region NEW PAGE
      const totalHeight =
        prepText.lines * baseFontSet.size + titleFontSet.size * 3;
      if (page.getPosition().y - totalHeight < 50) {
        const newPage = pdfDoc.addPage();
        const newMagias = magics.slice(index);

        if (newMagias.length > 0) {
          renderMagics(newPage, newMagias);
        }
        return;
      }
      // #endregion

      page.drawText(magia.Titulo, titleFontSet);
      page.moveDown(titleFontSet.size);

      page.drawText(head, {
        ...baseFontSet,
        font: timesRomanFontBold,
        size: 10,
      });
      page.moveDown(baseFontSet.size * 1.5);

      page.drawText(prepText.text, baseFontSet);
      page.moveDown(prepText.lines * baseFontSet.size + titleFontSet.size);
    }
  }
}
</script>

<template>
  <UIPageContainer class="page">
    <UIBreadcrumbs :items="breads" class="mb-9" />

    <section class="article">
      <h1>Magias</h1>

      <div>
        <button type="button" class="buttonPrimary" @click="generatePDF">
          Gerar PDF
        </button>
      </div>
    </section>
  </UIPageContainer>
</template>
