import type { CSS } from '@stitches/core';
import { css } from './stitches';

interface CreateButtonParams {
  text: string;
  css?: CSS;
}

export default function createButton({
  text,
  css: extraCss = {},
}: CreateButtonParams) {
  const buttonEl = document.createElement('button');
  const buttonCss = css(
    {
      width: '54px',
      height: '40px',
      background: '$light3',
      border: 'none',
      borderRadius: '10px',
      fontSize: '14px',
      cursor: 'pointer',
      '&:hover': {
        background: '$light2',
      },
      '&:focus': {
        border: '1px solid $light1',
      },
      '&:active': {
        background: '$light0',
      },
    },
    extraCss,
  );
  buttonEl.className = buttonCss();
  buttonEl.innerText = text;
  return buttonEl;
}
