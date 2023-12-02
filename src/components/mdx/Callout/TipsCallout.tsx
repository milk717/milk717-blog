import {HTMLAttributes} from 'react';
import {theme} from '../../../styles/theme';
import Typography from '../../common/Typography/Typography';
import {css} from '@emotion/react';
import {TipsIcon} from '../../../icons/TipsIcon';

export const TipsCallout: React.FC<HTMLAttributes<HTMLElement>> = ({
  ...args
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.colorSurface03};
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        margin: 0.75rem 0;
      `}>
      <Typography
        component="p"
        css={css`
          display: flex;
          align-items: center;
          column-gap: 0.5rem;
          margin: 0;
          font-weight: 600;
          font-size: 1rem;
          color: ${theme.colors.colorPoint07};
        `}>
        <TipsIcon />
        Tips
      </Typography>
      <blockquote {...args}>{args.children}</blockquote>
    </div>
  );
};
