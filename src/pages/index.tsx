import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {graphql} from 'gatsby';
import {HomeContent} from '../components/home/HomeContent';
import HomeLayout from '../components/layout/HomeLayout';

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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "YYYY-MM-DD")
            category
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
