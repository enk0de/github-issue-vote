import { css } from "./stitches";

export default function createButton(text: string) {
  const button = document.createElement("button");
  const buttonCss = css({
    width: "54px",
    height: "40px",
    background: "$light3",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    "&:hover": {
      background: "$light2",
    },
    "&:focus": {
      border: "1px solid $light1",
    },
    "&:active": {
      background: "$light0",
    },
  });
  button.className = buttonCss();
  button.innerText = text;
  return button;
}
