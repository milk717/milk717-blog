import React, {FC, PropsWithChildren} from 'react';
import {css, Global, ThemeProvider} from '@emotion/react';
import {theme} from '../../styles/theme';
import _global from '../../styles/theme/_global';

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
      {children}
    </ThemeProvider>
  );
};

export default Layout;
