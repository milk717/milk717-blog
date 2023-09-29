import * as React from 'react';
import {graphql, PageProps} from 'gatsby';

const BlogPostTemplate = ({
    data: {markdownRemark},
}: PageProps<Queries.BlogPostQuery>) => {
    const {html} = markdownRemark;
    return (
        <div>
            <div>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </div>
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
