import dotenv from 'dotenv';
import {GatsbyConfig} from 'gatsby';

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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Milk717의 개발 블로그 입니다.`,
        short_name: `Milk717 Blog`,
        start_url: `/`,
        background_color: `#EFF1F7`,
        theme_color: `#2C4C8A`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
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
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              wrapperStyle: 'margin: 1.75rem auto;',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
};

export default config;
