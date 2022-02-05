import { css } from "./stitches";

export default function createText(text: string) {
  const textEl = document.createElement("p");
  const textCss = css({
    fontSize: "14px",
    lineHeight: "17px",
    textAlign: "center",
    color: "#8F90A6",
  });
  textEl.className = textCss();
  textEl.innerText = text;
  return textEl;
}
