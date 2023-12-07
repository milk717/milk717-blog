import React, {FC, PropsWithChildren} from 'react';
import {css, Global, ThemeProvider} from '@emotion/react';
import {theme} from '../../styles/theme';
import _global from '../../styles/theme/_global';
import {Header} from '../common/Header';

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={_global} />
      <div
        css={css`
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          width: 100vw;
          background-color: ${theme.colors.colorSurface00};
          z-index: -1;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          row-gap: ${theme.size.areaGap};
          padding-bottom: ${theme.size.areaGap};
        `}>
        <Header />
        <div
          css={css`
            padding: 0 ${theme.size.areaGap};
          `}>
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
