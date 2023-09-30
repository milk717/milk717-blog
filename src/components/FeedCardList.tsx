import React from 'react';
import '../stylesheets/feed-card.scss';

const FeedCardList = ({data}: {data: Queries.BlogPostListQuery}) => {
    const posts = data.allMarkdownRemark?.edges;
    return (
        <div className="feed-card-list">
            {posts?.map(({node}) => (
                <div className="feed-card" key={node.id}>
                    <img
                        src="https://post-phinf.pstatic.net/MjAyMjExMTdfNzYg/MDAxNjY4NjUwMTQxMzU2.KOS5Iab6G0-88otScR2vsaZmoimqN8v-b5QiMhSkj5og.qsrQszwww-AZFP32Vs0gfJpqYp4tWpaXQYRupweSlOMg.JPEG/1633c62db4f2af416b327f14ce3c3100.jpg?type=w800_q75"
                        alt="썸네일 이미지"
                    />
                    <div className="text-area">
                        <i>{node.frontmatter?.category}</i>
                        <h2>{node.frontmatter?.title}</h2>
                        <p>{node.frontmatter?.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeedCardList;
