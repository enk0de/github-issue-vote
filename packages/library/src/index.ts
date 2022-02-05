import createButton from "./button";
import { css } from "./stitches";
import createText from "./text";

interface VoteData {
  issueId: number;
  title: string;
}

export default function createVote({ issueId, title }: VoteData) {
  console.log(`
    github-issue-vote
    created vote instance
    ${JSON.stringify({ issueId, title })}
  `);
  const containerEl = document.createElement("div");
  const containerCss = css({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
  });
  containerEl.className = containerCss();

  const titleEl = createText({ text: title });

  const buttonContainerEl = document.createElement("div");
  const buttonContainerCss = css({
    display: "flex",
    gap: 10,
  });
  buttonContainerEl.className = buttonContainerCss();

  const agreeButtonEl = createButton({ text: "👍" });
  const disagreeButtonEl = createButton({ text: "👎" });

  buttonContainerEl.appendChild(agreeButtonEl);
  buttonContainerEl.appendChild(disagreeButtonEl);

  return containerEl;
}
