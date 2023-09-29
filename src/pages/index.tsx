import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {graphql} from 'gatsby';
import '../stylesheets/home-page.scss';
import FeedCardList from '../components/FeedCardList';
import SideBar from '../components/SideBar';

const IndexPage = ({data}: PageProps<Queries.BlogPostListQuery>) => {
    return (
        <main>
            <SideBar />
            <div className="content-area">
                <FeedCardList data={data} />
            </div>
        </main>
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
                        title
                        date(formatString: "YYYY-MM-DD")
                        category
                    }
                    excerpt
                }
            }
        }
    }
`;
export const Head: HeadFC = () => <title>Home Page</title>;
