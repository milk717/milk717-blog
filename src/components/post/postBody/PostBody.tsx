import * as React from 'react';
import {HTMLAttributes, PropsWithChildren} from 'react';
import {MDXProvider} from '@mdx-js/react';
import Typography from '../../../styles/styled/typography';
import {css} from '@emotion/react';
import {theme} from '../../../styles/theme';

const components = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography.H1 {...props}>{props.children}</Typography.H1>
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography.H2 {...props}>{props.children}</Typography.H2>
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography.H3 {...props}>{props.children}</Typography.H3>
  ),
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography.H4 {...props}>{props.children}</Typography.H4>
  ),
  h5: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography.H5 {...props}>{props.children}</Typography.H5>
  ),
  h6: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography.H6 {...props}>{props.children}</Typography.H6>
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <Typography.P {...props}>{props.children}</Typography.P>
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      css={css`
        font-size: 1.125rem;
        padding-left: 1rem;
        line-height: 1.7;
      `}>
      {props.children}
    </ul>
  ),
  ol: (props: HTMLAttributes<HTMLUListElement>) => (
    <ol
      {...props}
      css={css`
        font-size: 1.125rem;
        padding-left: 1rem;
        line-height: 1.7;
      `}>
      {props.children}
    </ol>
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li
      {...props}
      css={css`
        font-size: 1.125rem;
        line-height: 1.7;
        letter-spacing: -0.004rem;
        word-break: keep-all;
        overflow-wrap: break-word;
      `}>
      {props.children}
    </li>
  ),
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      css={css`
        font-size: 1.125rem;
        line-height: 1.7;
        letter-spacing: -0.004rem;
        word-break: keep-all;
        overflow-wrap: break-word;
      `}>
      {props.children}
    </a>
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      css={css`
        padding: 0.2rem 0.4rem;
        font-size: 85%;
        border-radius: 0.1875rem;
        background-color: ${theme.colors.colorSurface00};
      `}>
      {props.children}
    </code>
  ),
  img: (props: HTMLAttributes<HTMLImageElement>) => (
    <img
      {...props}
      css={css`
        border-radius: 1.5rem;
      `}
    />
  ),
};

export const PostBody: React.FC<PropsWithChildren> = ({children}) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
