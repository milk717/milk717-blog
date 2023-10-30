import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHammer} from '@fortawesome/free-solid-svg-icons';
import {css, useTheme} from '@emotion/react';
import Typography from '../../styles/styled/typography';
import {Box} from './Box';

export const Hammer = () => {
    const theme = useTheme();
    return (
        <Box
            style={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 40px;
                width: 100%;
                height: 100%;
            `}>
            <FontAwesomeIcon
                icon={faHammer}
                size="10x"
                color={theme.colors.colorPoint03}
                css={css`
                    @keyframes hammerAnimation {
                        0%,
                        100% {
                            transform: rotate(0deg);
                        }
                        50% {
                            transform: rotate(15deg);
                        }
                    }
                    animation: hammerAnimation 0.5s infinite;
                `}
            />
            <Typography.H2>Coming Soon</Typography.H2>
        </Box>
    );
};
