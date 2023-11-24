import {css} from '@emotion/react';
import {theme} from './index';

const _global = css`
  @use 'colors';

  *,
  body {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    overflow-wrap: break-word;
  }

  i {
    font-style: normal;
  }

  button {
    border: none;
    background: inherit;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    white-space: normal;
    overflow-wrap: break-word;
    word-break: break-all;
    display: block;
  }

  ul,
  li {
    white-space: normal;
    overflow-wrap: break-word;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
      format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }

  html {
    font-size: 16px;
    font-family: 'Pretendard', serif;
  }

  @media (max-width: ${theme.breakpoints.mobileL}) {
    html {
      font-size: 14px;
    }
  }
`;
export default _global;
