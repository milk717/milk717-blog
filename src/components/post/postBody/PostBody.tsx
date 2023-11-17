import * as React from 'react';
import {HTMLAttributes, PropsWithChildren} from 'react';
import {MDXProvider} from '@mdx-js/react';
import Typography from '../../../styles/styled/typography';

const components = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography.H1 {...props}>{props.children}</Typography.H1>
  ),
};

export const PostBody: React.FC<PropsWithChildren> = ({children}) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
