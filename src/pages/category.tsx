import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {CategoryList} from '../components/category/CategoryList';
import HomeLayout from '../components/layout/HomeLayout';

const CategoryPage = ({
  data: {
    allMarkdownRemark: {group},
  },
}: PageProps<Queries.BlogCategoryListQuery>) => {
  return (
    <HomeLayout>
      <CategoryList data={group} />
    </HomeLayout>
  );
};

export const query = graphql`
  query BlogCategoryList {
    allMarkdownRemark {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  }
`;
export default CategoryPage;
