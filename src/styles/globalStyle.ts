import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-background: rgba(249, 249, 249);
  }
  * {
    box-sizing: border-box;
    font-family: 'Pretendard';
  }
  html {
    font-size: 10px;
    color: #fff;
  }
  body {
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Pretendard';
    letter-spacing: -0.05rem;
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }
  .outer {
    height: 100vh;
    overflow-y: auto;
  }
  .outer::-webkit-scrollbar {
    display: none;
  }
  .scroll::-webkit-scrollbar {
    display: none;
  }
  .inner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
