import * as React from 'react';
import {FC} from 'react';
import {Children} from '../../../types/common';
import './post-content.scss';

export const PostContent: FC<Children> = ({children}) => {
    return <div className="post-content">{children}</div>;
};
