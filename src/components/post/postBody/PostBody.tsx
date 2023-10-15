import * as React from 'react';
import './post-body.scss';

export const PostBody = ({html}: {html: string}) => {
    return (
        <div className="post-body" dangerouslySetInnerHTML={{__html: html}} />
    );
};
