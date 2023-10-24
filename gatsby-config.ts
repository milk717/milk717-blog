import type {GatsbyConfig} from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
    path: `.env`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Milk717 Blog`,
        siteUrl: `https://www.yourdomain.tld`,
        username: 'milk717',
        githubUrl: 'https://github.com/milk717',
        email: 'robolindasoo@gmail.com',
        linkedIn: `https://www.linkedin.com/in/%EC%88%98%EB%AF%BC-%EA%B9%80-975393287`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-code-titles',
                        options: {
                            className: 'code-title',
                        },
                    },
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            terminal: 'carbon',
                            theme: 'one-dark',
                            lineNumbers: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [process.env.GA_TRACKING_ID],
            },
        },
    ],
};

export default config;
