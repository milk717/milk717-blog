import * as React from 'react';
import {FC} from 'react';
import {Children} from '../../types/common';
import {css, useTheme} from '@emotion/react';
import {Nav} from '../common/Nav';

export const PostContent: FC<Children> = ({children}) => {
    const theme = useTheme();
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                row-gap: ${theme.size.areaGap};
            `}>
            <Nav />
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    padding: 1.5rem;
                    border-radius: 40px;
                    background-color: ${theme.colors.grayscaleWhite};
                `}>
                {children}
            </div>
        </div>
    );
};
