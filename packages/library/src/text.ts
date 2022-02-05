import { css } from "./stitches";
import type { CSS } from "@stitches/core";

interface CreateTextParams {
  text: string;
  css?: CSS;
}

export default function createText({
  text,
  css: extraCss = {},
}: CreateTextParams) {
  const textEl = document.createElement("p");
  const textCss = css(
    {
      fontSize: "14px",
      lineHeight: "17px",
      textAlign: "center",
      color: "#8F90A6",
      margin: 0,
      padding: 0,
    },
    extraCss
  );
  textEl.className = textCss();
  textEl.innerText = text;
  return textEl;
}
