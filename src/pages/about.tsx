import React from 'react';
import {Hammer} from '../components/common/Hammer';
import {Box} from '../components/common/Box';
import {css} from '@emotion/react';
import HomeLayout from '../components/layout/HomeLayout';

const InfoPage = () => {
  return (
    <HomeLayout>
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
    </HomeLayout>
  );
};

export default InfoPage;
