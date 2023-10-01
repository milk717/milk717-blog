import * as React from 'react';
import {graphql, PageProps} from 'gatsby';
import Layout from '../components/Layout';
import '../stylesheets/post-content.scss';
import PostHead from '../components/PostHead';
import {defineCustomElements as deckDeckGoHighlightElement} from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();
const BlogPostTemplate = ({
    data: {markdownRemark},
}: PageProps<Queries.BlogPostQuery>) => {
    const html = markdownRemark?.html;
    const {title, category, tags} = markdownRemark?.frontmatter!;
    return (
        <Layout>
            <div className="post-page">
                <PostHead title={title} category={category} tags={tags} />
                <hr />
                <div
                    className="content"
                    dangerouslySetInnerHTML={{__html: html ?? ''}}
                />
            </div>
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
            }
        }
    }
`;
