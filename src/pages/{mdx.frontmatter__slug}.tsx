import * as React from 'react';
import {graphql, PageProps} from 'gatsby';
import PostHead from '../components/post/PostHead';
import PostLayout from '../components/layout/PostLayout';
import MarkdownComponents from '../components/mdx/MarkdownComponents';
import {css} from '@emotion/react';
import {UtterancesComments} from '../components/post/UtterancesComments';

const BlogPostTemplate = ({
  data,
  children,
}: PageProps<Queries.BlogPostQuery>) => {
  const {title, category, tags, date} = data.mdx?.frontmatter!;

  return (
    <PostLayout>
      <PostHead title={title} category={category} tags={tags} date={date} />
      <MarkdownComponents>
        <article
          css={css`
            max-width: 100%;
          `}>
          {children}
          <UtterancesComments />
        </article>
      </MarkdownComponents>
    </PostLayout>
  );
};
export default BlogPostTemplate;

export const Head = ({data}: PageProps<Queries.BlogPostQuery>) => {
  const mdx = data.mdx;
  if (!mdx || !mdx.frontmatter || !mdx.excerpt) return null;
  return (
    <>
      <title>{mdx.frontmatter.title}</title>
      <meta name="author" content="milk717" />
      <meta name="description" content={mdx.excerpt} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://www.milk717.com/${mdx.frontmatter.slug}`}
      />
      <meta property="og:title" content={mdx.frontmatter.title!} />
      <meta property="og:description" content={mdx.excerpt} />
      <meta
        property="og:image"
        content={
          mdx.frontmatter.thumbnail?.childrenImageSharp?.at(0)?.original?.src!
        }
      />
      <meta property="og:site_name" content={mdx.frontmatter.title!} />
      <meta property="og:locale" content="ko_KR" />
    </>
  );
};

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        category
        tags
        date
        slug
        thumbnail {
          childrenImageSharp {
            original {
              src
            }
          }
        }
      }
      excerpt
    }
  }
`;
