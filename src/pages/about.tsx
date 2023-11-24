import React from 'react';
import {Box} from '../components/common/Box';
import {css} from '@emotion/react';
import HomeLayout from '../components/layout/HomeLayout';
import Typography from '../components/common/Typography/Typography';

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
        <Typography>준비중</Typography>
      </Box>
    </HomeLayout>
  );
};

export default InfoPage;
