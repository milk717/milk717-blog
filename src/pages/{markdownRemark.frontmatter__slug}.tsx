import * as React from 'react';
import {graphql, PageProps} from 'gatsby';
import Layout from '../components/layout/Layout';
import PostHead from '../components/post/PostHead/PostHead';
import {defineCustomElements} from '@deckdeckgo/highlight-code/dist/loader';
import {PostContent} from '../components/post/PostContent';
import {PostBody} from '../components/post/postBody/PostBody';

defineCustomElements();
const BlogPostTemplate = ({
    data: {markdownRemark},
}: PageProps<Queries.BlogPostQuery>) => {
    const html = markdownRemark?.html;
    const {title, category, tags} = markdownRemark?.frontmatter!;
    console.log(markdownRemark);
    return (
        <Layout>
            <PostContent>
                <PostHead title={title} category={category} tags={tags} />
                <hr />
                <PostBody html={html ?? ''} />
            </PostContent>
        </Layout>
    );
};
export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPost($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                title
                category
                tags
                date
            }
        }
    }
`;
