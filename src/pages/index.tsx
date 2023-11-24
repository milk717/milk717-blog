import * as React from 'react';
import {useState} from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {graphql} from 'gatsby';
import HomeLayout from '../components/layout/HomeLayout';
import {Sidebar} from '../components/home/SideBar/Sidebar';
import {HomeContent} from '../components/home/HomeContent';

const IndexPage = ({data}: PageProps<Queries.BlogPostListQuery>) => {
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPosts = data.allMdx.edges.filter(
    edge =>
      selectedTag === '' || edge.node.frontmatter?.tags?.includes(selectedTag),
  );

  const handleTagFilterClick = (tags: string) => {
    setSelectedTag(tags);
  };

  return (
    <HomeLayout>
      <Sidebar onTagFilterClick={handleTagFilterClick} />
      <HomeContent data={filteredPosts} />
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
            tags
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
