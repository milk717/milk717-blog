import React, {createRef, useLayoutEffect} from 'react';

export const UtterancesComments: React.FC = React.memo(() => {
  const containerRef = createRef<HTMLDivElement>();
  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'milk717/blog-comments',
      theme: 'github-light',
      'issue-term': 'pathname',
      label: '✨💬 comments ✨',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current?.appendChild(utterances);
  }, []);

  return <section ref={containerRef} />;
});
