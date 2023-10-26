import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHashtag} from '@fortawesome/free-solid-svg-icons';

export const TagItem = ({tagName, count}: {tagName: string; count: number}) => {
    return (
        <div className="tag-item">
            <FontAwesomeIcon icon={faHashtag} size="1x" />
            <p className="tag-name">{tagName}</p>
            <p className="tag-count">{count}</p>
        </div>
    );
};
