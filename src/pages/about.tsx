import React from 'react';
import Layout from '../components/layout/Layout';
import {Hammer} from '../components/common/Hammer';
import {Box} from '../components/common/Box';
import {css} from '@emotion/react';

const InfoPage = () => {
  return (
    <Layout>
      <Box
        style={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          border-radius: 40px;
        `}>
        <Hammer />
      </Box>
    </Layout>
  );
};

export default InfoPage;
