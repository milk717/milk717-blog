import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Box} from './Box';
import {css} from '@emotion/react';

export const Search = () => {
    return (
        <Box
            style={css`
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 16px;
                column-gap: 16px;
                border-radius: 24px;
            `}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
            <input
                type="text"
                placeholder="Search..."
                css={css`
                    border: none;
                    font-size: 1.125rem;
                    background: none;
                `}
            />
        </Box>
    );
};
