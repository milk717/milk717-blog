import React, {FC, PropsWithChildren} from 'react';
import Layout from './Layout';
import {css} from '@emotion/react';
import {theme} from '../../styles/theme';

const PostLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Layout>
      <main
        css={css`
          max-width: 60rem;
          margin: 1rem auto;
        `}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 2rem;
            padding: 1.5rem;
            margin: 0 auto;
            border-radius: 40px;
            background-color: ${theme.colors.grayscaleWhite};

            @media (max-width: ${theme.breakpoints.mobileL}) {
              margin: 0;
              padding: 0.75rem;
            }
          `}>
          {children}
        </div>
      </main>
    </Layout>
  );
};

export default PostLayout;
