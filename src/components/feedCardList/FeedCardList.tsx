import React from 'react';
import './feed-card.scss';
import {Link} from 'gatsby';

const FeedCardList = ({data}: {data: Queries.BlogPostListQuery}) => {
    const posts = data.allMarkdownRemark?.edges;
    return (
        <div className="feed-card-list">
            {posts?.map(({node}) => (
                <Link
                    className="feed-card"
                    key={node.id}
                    to={node.frontmatter?.slug ?? '/404'}>
                    <img
                        src="https://post-phinf.pstatic.net/MjAyMjExMTdfNzYg/MDAxNjY4NjUwMTQxMzU2.KOS5Iab6G0-88otScR2vsaZmoimqN8v-b5QiMhSkj5og.qsrQszwww-AZFP32Vs0gfJpqYp4tWpaXQYRupweSlOMg.JPEG/1633c62db4f2af416b327f14ce3c3100.jpg?type=w800_q75"
                        alt="썸네일 이미지"
                    />
                    <div className="text-area">
                        <p>{node.frontmatter?.category}</p>
                        <h2>{node.frontmatter?.title}</h2>
                        <p>{node.frontmatter?.date}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default FeedCardList;
