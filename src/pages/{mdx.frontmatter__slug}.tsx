import * as React from 'react';
import {graphql, PageProps} from 'gatsby';
import PostHead from '../components/post/PostHead/PostHead';
import {PostBody} from '../components/post/postBody/PostBody';
import PostLayout from '../components/layout/PostLayout';

const BlogPostTemplate = ({
  data,
  children,
}: PageProps<Queries.BlogPostQuery>) => {
  const {title, category, tags} = data.mdx?.frontmatter!;
  return (
    <PostLayout>
      <PostHead title={title} category={category} tags={tags} />
      <PostBody>{children}</PostBody>
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
