import React from 'react';
import Layout from '../components/layout/Layout';
import {graphql, PageProps} from 'gatsby';
import {TagList} from '../components/tag/TagList';

const TagPage = ({
    data: {
        allMarkdownRemark: {group},
    },
}: PageProps<Queries.BlogTagsListQuery>) => {
    return (
        <Layout>
            <TagList data={group} />
        </Layout>
    );
};

export const query = graphql`
    query BlogTagsList {
        allMarkdownRemark {
            group(field: {frontmatter: {tags: SELECT}}) {
                fieldValue
                totalCount
            }
        }
    }
`;
export default TagPage;
