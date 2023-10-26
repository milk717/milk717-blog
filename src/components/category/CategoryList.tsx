import React, {useState} from 'react';
import {CategoryItem} from './CategoryItem';
import './category.scss';

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
        <div className="category-list">
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
        </div>
    );
};
