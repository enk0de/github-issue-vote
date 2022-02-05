import createButton from './button';
import { css } from './stitches';
import createText from './text';

interface VoteData {
  issueId: number;
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function createVote({ issueId, title }: VoteData) {
  const containerEl = document.createElement('div');
  const containerCss = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    borderRadius: '10px',
  });
  containerEl.className = containerCss();

  const titleEl = createText({ text: title, css: { padding: '5px 0' } });

  const buttonContainerEl = document.createElement('div');
  const buttonContainerCss = css({
    display: 'flex',
    gap: 10,
  });
  buttonContainerEl.className = buttonContainerCss();

  const agreeButtonEl = createButton({ text: '👍' });
  const disagreeButtonEl = createButton({ text: '👎' });

  buttonContainerEl.appendChild(agreeButtonEl);
  buttonContainerEl.appendChild(disagreeButtonEl);

  containerEl.appendChild(titleEl);
  containerEl.appendChild(buttonContainerEl);

  return containerEl;
}
