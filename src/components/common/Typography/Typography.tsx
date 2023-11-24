import React, {ElementType, ReactNode} from 'react';
import {css} from '@emotion/react';
import {TypographyStyles} from './Typography.styles';

type TypographyProps = {
  component?: ElementType;
  variant?: keyof typeof TypographyStyles;
  noWrap?: boolean;
  paragraph?: boolean;
  color?: string;
  children: ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  component,
  variant = 'p',
  noWrap,
  children,
  ...args
}) => {
  const Component = component || 'p';

  return (
    <Component
      css={[
        css`
          position: relative;
          text-align: left;
          line-height: 1.7;
          white-space: pre-wrap;
          letter-spacing: -0.004rem;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin: 1.25rem 0;
          ${noWrap &&
          `
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          `},
        `,
        TypographyStyles[variant],
      ]}
      {...args}>
      {children}
    </Component>
  );
};

export default Typography;
