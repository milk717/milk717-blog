import * as React from 'react';
import {graphql, PageProps} from 'gatsby';
import PostHead from '../components/post/PostHead';
import PostLayout from '../components/layout/PostLayout';
import MarkdownComponents from '../components/mdx/MarkdownComponents';

const BlogPostTemplate = ({
  data,
  children,
}: PageProps<Queries.BlogPostQuery>) => {
  const {title, category, tags} = data.mdx?.frontmatter!;
  return (
    <PostLayout>
      <PostHead title={title} category={category} tags={tags} />
      <MarkdownComponents>{children}</MarkdownComponents>
    </PostLayout>
  );
};
export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        category
        tags
        date
      }
    }
  }
`;
