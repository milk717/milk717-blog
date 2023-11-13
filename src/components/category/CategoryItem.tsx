import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAnglesUp, faFolder} from '@fortawesome/free-solid-svg-icons';
import {ElementType} from '../../types/utils';
import {Link} from 'gatsby';

export const CategoryItem = ({
  id,
  title,
  postCount,
  isSelected,
  postInfo,
  onClick,
}: {
  id: number;
  title: string;
  postCount: number;
  isSelected: boolean;
  postInfo: ElementType<
    Queries.BlogCategoryListQuery['allMarkdownRemark']['group']
  >['edges'];
  onClick: (key: number) => void;
}) => {
  return (
    <div key={id} className="category-item" onClick={() => onClick(id)}>
      <div className={`category-title ${isSelected ? 'selected' : ''}`}>
        <div className="title-left">
          <FontAwesomeIcon
            icon={faFolder}
            size="1x"
            color={isSelected ? '#fff' : '#1A3B70'}
          />
          <p className="title">{title}</p>
          <p className="post-count">
            <strong>{postCount}</strong>
            개의 포스트
          </p>
        </div>
        <div className="title-right">
          <FontAwesomeIcon
            icon={faAnglesUp}
            size="1x"
            color={isSelected ? '#fff' : '#1A3B70'}
          />
        </div>
      </div>
      {isSelected && (
        <ul>
          {postInfo.map(({node: {frontmatter}}, key) => (
            <li key={key}>
              <Link to={frontmatter?.slug || '/'}>{frontmatter?.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
