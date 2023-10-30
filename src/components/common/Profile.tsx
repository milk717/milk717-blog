import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Box} from './Box';
import {GithubMarkIcon} from '../../icons/GithubMarkIcon';
import {GmailDarkIcon} from '../../icons/GmailIcon';
import {LinkedInIcon} from '../../icons/LinkedInIcon';
import {css} from '@emotion/react';

type Props = {};
export const Profile: React.FC<Props> = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    username
                    githubUrl
                    email
                    linkedIn
                }
            }
        }
    `);
    const metadata = data.site?.siteMetadata;
    return (
        <Box
            padding={24}
            borderRadius={40}
            style={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 8px;
                border-radius: 40px;
                padding: 40px 56px;
            `}>
            <img
                src="https://avatars.githubusercontent.com/u/57657868?v=4"
                alt="프로필 이미지"
                css={css`
                    border-radius: 50%;
                    width: 150px;
                    height: 150px;
                `}
            />
            <p css={css``}>{metadata.username}</p>
            <div
                css={css`
                    display: flex;
                    column-gap: 8px;
                `}>
                <a href={metadata?.githubUrl}>
                    <GithubMarkIcon />
                </a>
                <a href={`mailto:${metadata?.email}`}>
                    <GmailDarkIcon />
                </a>
                <a href={metadata?.linkedIn}>
                    <LinkedInIcon />
                </a>
            </div>
        </Box>
    );
};
