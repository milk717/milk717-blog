import React, {FC, PropsWithChildren} from 'react';
import Layout from './Layout';
import {css} from '@emotion/react';
import {theme} from '../../styles/theme';

const PostLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Layout>
      <main
        css={css`
          max-width: 65rem;
          margin: 1rem auto;
        `}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: 2rem;
            margin: 2rem;
            padding: 1.5rem;
            border-radius: 40px;
            background-color: ${theme.colors.grayscaleWhite};
          `}>
          {children}
        </div>
      </main>
    </Layout>
  );
};

export default PostLayout;
