import * as React from 'react';
import {graphql, PageProps} from 'gatsby';
import Layout from '../components/Layout';

const BlogPostTemplate = ({
    data: {markdownRemark},
}: PageProps<Queries.BlogPostQuery>) => {
    const html = markdownRemark?.html;
    return (
        <Layout>
            <div>
                <div dangerouslySetInnerHTML={{__html: html ?? ''}} />
            </div>
        </Layout>
    );
};
export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPost($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
        }
    }
`;
