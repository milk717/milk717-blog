import React from 'react';
import Layout from '../components/layout/Layout';
import {graphql, PageProps} from 'gatsby';
import {CategoryList} from '../components/category/CategoryList';

const CategoryPage = ({
    data: {
        allMarkdownRemark: {group},
    },
}: PageProps<Queries.BlogCategoryListQuery>) => {
    return (
        <Layout>
            <CategoryList data={group} />
        </Layout>
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
