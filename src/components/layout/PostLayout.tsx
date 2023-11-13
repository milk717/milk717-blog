import React, {FC, PropsWithChildren} from 'react';
import Layout from './Layout';
import {css} from '@emotion/react';

const PostLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Layout>
      <main
        css={css`
          max-width: 65rem;
          margin: 1rem auto;
        `}>
        {children}
      </main>
    </Layout>
  );
};

export default PostLayout;
