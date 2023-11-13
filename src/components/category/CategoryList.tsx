import React, {useState} from 'react';
import {CategoryItem} from './CategoryItem';
import './category.scss';
import {Box} from '../common/Box';
import {css} from '@emotion/react';

export const CategoryList = ({
  data,
}: {
  data: Queries.BlogCategoryListQuery['allMarkdownRemark']['group'];
}) => {
  const [selectedItemKey, setSelectedItemKey] = useState<number | null>(null);

  const handleCategoryItemClick = (categoryItemKey: number) => {
    setSelectedItemKey(
      selectedItemKey === categoryItemKey ? null : categoryItemKey,
    );
  };

  return (
    <Box
      style={css`
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        padding: 0 16px;
        height: 100%;
        border-radius: 40px;
      `}>
      {data.map(({fieldValue, totalCount, edges}, key) => {
        return (
          <CategoryItem
            key={key}
            id={key}
            title={fieldValue ?? ''}
            postCount={totalCount}
            isSelected={selectedItemKey === key}
            postInfo={edges}
            onClick={handleCategoryItemClick}
          />
        );
      })}
    </Box>
  );
};
