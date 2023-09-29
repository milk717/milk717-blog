import React from 'react';
import {PageProps} from 'gatsby';
import '../stylesheets/feed-card.scss';

export default function FeedCard({data}: PageProps<Queries.BlogPostListQuery>) {
    const posts = data.allMarkdownRemark.edges;
    console.log(posts);
    return posts.map(({node: {frontmatter}}) => (
        <div className="feed-card">
            <img
                src="https://post-phinf.pstatic.net/MjAyMjExMTdfNzYg/MDAxNjY4NjUwMTQxMzU2.KOS5Iab6G0-88otScR2vsaZmoimqN8v-b5QiMhSkj5og.qsrQszwww-AZFP32Vs0gfJpqYp4tWpaXQYRupweSlOMg.JPEG/1633c62db4f2af416b327f14ce3c3100.jpg?type=w800_q75"
                alt="썸네일 이미지"
            />
            <div className="text-area">
                <i>{frontmatter?.category}</i>
                <h2>{frontmatter?.title}</h2>
                <p>{frontmatter?.date}</p>
            </div>
        </div>
    ));
}
