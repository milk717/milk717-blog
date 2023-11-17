import type {GatsbyConfig} from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Milk717 Blog`,
    siteUrl: `https://www.milk717.com`,
    username: 'milk717',
    githubUrl: 'https://github.com/milk717',
    email: 'robolindasoo@gmail.com',
    linkedIn: `https://www.linkedin.com/in/%EC%88%98%EB%AF%BC-%EA%B9%80-975393287`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
        head: true,
      },
    },
    'gatsby-plugin-emotion',
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
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              showCaptions: true,
            },
          },
          // {
          //   resolve: `gatsby-remark-highlight-code`,
          //   options: {
          //     terminal: 'carbon',
          //     theme: 'one-dark',
          //     lineNumbers: true,
          //   },
          // },
        ],
      },
    },
  ],
};

export default config;
