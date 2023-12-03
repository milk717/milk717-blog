import * as React from 'react';
import {ChangeEventHandler, useState} from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {graphql} from 'gatsby';
import HomeLayout from '../components/layout/HomeLayout';
import {Sidebar} from '../components/home/SideBar/Sidebar';
import {HomeContent} from '../components/home/HomeContent';

const IndexPage = ({data}: PageProps<Queries.BlogPostListQuery>) => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = data.allMdx.edges.filter(edge => {
    const post = edge.node;
    const isTagMatched =
      selectedTag === 'All' || post.frontmatter?.tags?.includes(selectedTag);
    const isSearchMatched =
      searchValue === '' ||
      post.frontmatter?.title
        ?.toLowerCase()
        .includes(searchValue.slice(0, -1).toLowerCase());

    return isTagMatched && isSearchMatched;
  });

  const handleTagFilterClick = (tags: string) => {
    setSelectedTag(tags);
  };

  const handleSearchValueChanged: ChangeEventHandler<HTMLInputElement> = e => {
    setSearchValue(e.target.value);
  };

  return (
    <HomeLayout>
      <Sidebar
        selectedTag={selectedTag}
        onTagFilterClick={handleTagFilterClick}
        onSearchValueChanged={handleSearchValueChanged}
      />
      <HomeContent data={filteredPosts.length ? filteredPosts : undefined} />
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
