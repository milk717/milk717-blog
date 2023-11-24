export const UtterancesComments = () => (
  <section
    dangerouslySetInnerHTML={{
      __html: `
        <script 
          src='https://utteranc.es/client.js'
          repo='milk717/blog-comments'
          issue-term='pathname'
          label='💬'
          theme='github-light'
          crossorigin='anonymous'
          async>
        </script>
      `,
    }}
  />
);
