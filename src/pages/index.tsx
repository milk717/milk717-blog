import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {graphql} from 'gatsby';
import HomeLayout from '../components/layout/HomeLayout';
import {HomeContent} from '../components/home/HomeContent';

const IndexPage = ({data}: PageProps<Queries.BlogPostListQuery>) => {
  return (
    <HomeLayout>
      <HomeContent data={data} />
    </HomeLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogPostList {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            date
            category
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
