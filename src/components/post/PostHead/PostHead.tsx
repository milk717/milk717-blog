import React from 'react';
import {faFolder, faTags} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './post-head.scss';

type PostHeadParam = {
  title: string | null;
  category: string | null;
  tags: readonly (string | null)[] | null;
};

const PostHead: React.FC<PostHeadParam> = ({title, category, tags}) => {
  return (
    <div className="post-title">
      <h1>{title}</h1>
      <div className="properties">
        <div className="item">
          <div className="left">
            <FontAwesomeIcon icon={faFolder} />
            <p>카테고리</p>
          </div>
          <p className="category">{category}</p>
        </div>
        <div className="item tags">
          <div className="left">
            <FontAwesomeIcon icon={faTags} />
            <p>태그</p>
          </div>
          <div className="tags-item">
            {tags?.map(tag => <p>{tag}</p>) ?? null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHead;
