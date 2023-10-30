import React, {ReactNode} from 'react';
import {css} from '@emotion/react';

type Props = {
    children: ReactNode;
};

export const Box: React.FC<Props> = ({children}) => {
    return (
        <div
            css={css`
                border-radius: 40px;
            `}></div>
    );
};
