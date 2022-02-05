import { css } from "./stitches";

const container = document.createElement("div", {});
const containerCss = css({
  background: "black",
});
container.className = containerCss();

const testButton = document.createElement("button");
const testButtonCss = css({
  background: "white",
  color: "blue",
});
testButton.className = testButtonCss();

container.appendChild(testButton);

export default container;
