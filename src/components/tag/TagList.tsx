import React from 'react';
import {TagItem} from './TagItem';
import './tag.scss';

export const TagList = ({
    data,
}: {
    data: Queries.BlogTagsListQuery['allMarkdownRemark']['group'];
}) => {
    return (
        <div className="tag-list">
            {data.map(({fieldValue, totalCount}, id) => (
                <TagItem tagName={fieldValue || ''} count={totalCount} />
            ))}
        </div>
    );
};
