import {useLocation} from '@reach/router';
import {Link} from 'gatsby';
import React from 'react';
import {Box} from './Box';
import {css} from '@emotion/react';
import Typography from '../../styles/styled/typography';

const menuItems = [
  {path: '/', label: 'Home'},
  {path: '/category/', label: 'Categories'},
  {path: '/about/', label: 'About'},
];
export const Nav = () => {
  const location = useLocation();

  return (
    <Box
      style={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        padding: 0 1.5rem;
        height: 3.5rem;
        border-radius: 24px;
      `}>
      <div
        css={css`
          display: flex;
          align-items: center;
          column-gap: 1rem;
        `}>
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            css={css`
              display: flex;
              justify-content: flex-start;
              align-items: center;
              column-gap: 1rem;
            `}>
            <Typography.Medium status={location.pathname === item.path}>
              {item.label}
            </Typography.Medium>
          </Link>
        ))}
      </div>
    </Box>
  );
};
