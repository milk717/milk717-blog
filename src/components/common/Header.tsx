import {css} from '@emotion/react';
import Typography from './Typography/Typography';
import {theme} from '../../styles/theme';
import {Box} from './Box';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';

export const Header = () => {
  const location = useLocation();
  const menuItems = [
    {path: '/', label: 'Home'},
    // {path: '/category/', label: 'Categories'},
    // {path: '/about/', label: 'About'},
  ];
  return (
    <div
      css={css`
        position: sticky;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        z-index: 99;
      `}>
      <Box
        style={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background-color: ${theme.colors.grayscaleWhite};
          border-radius: 0 0 1rem 1rem;
          width: 100%;
        `}>
        <Link to="/">
          <Typography
            variant="h1"
            css={css`
              font-size: 1.4rem;
              margin: 0;
              &:hover {
                text-decoration: underline;
              }
            `}>
            Milk717
          </Typography>
        </Link>
        <div
          css={css`
            display: flex;
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

                &:hover {
                  text-decoration: underline;
                }
              `}>
              <Typography
                component="span"
                variant="medium"
                css={css`
                  font-weight: ${location.pathname === item.path ? 700 : 400};
                `}>
                {item.label}
              </Typography>
            </Link>
          ))}
        </div>
      </Box>
    </div>
  );
};
