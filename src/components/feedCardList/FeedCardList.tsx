import React from 'react';
import './feed-card.scss';
import {Link} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
import {GatsbyImage} from 'gatsby-plugin-image';

const FeedCardList = ({data}: {data: Queries.BlogPostListQuery}) => {
    const posts = data.allMarkdownRemark?.edges;

    return (
        <div className="feed-card-list">
            {posts?.map(({node}) => (
                <Link
                    className="feed-card"
                    key={node.id}
                    to={node.frontmatter?.slug ?? '/404'}>
                    {node.frontmatter?.thumbnail?.childImageSharp
                        ?.gatsbyImageData && (
                        <GatsbyImage
                            image={
                                node.frontmatter.thumbnail.childImageSharp
                                    .gatsbyImageData
                            }
                            className="feed-thumbnail"
                            alt="썸네일 이미지"
                        />
                    )}
                    <div className="text-area">
                        <div className="text-area-top">
                            <div className="category">
                                <FontAwesomeIcon icon={faFolder} />
                                <p>{node.frontmatter?.category}</p>
                            </div>
                            <p className="post-title">
                                {node.frontmatter?.title}
                            </p>
                        </div>
                        <p>{node.frontmatter?.date}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default FeedCardList;
