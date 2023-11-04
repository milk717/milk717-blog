import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHammer} from '@fortawesome/free-solid-svg-icons';
import {css, useTheme} from '@emotion/react';
import Typography from '../../styles/styled/typography';

export const Hammer = () => {
    const theme = useTheme();
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 40px;
                row-gap: 1rem;
                padding: 1rem;
            `}>
            <FontAwesomeIcon
                icon={faHammer}
                size="6x"
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
            <Typography.H2>준비중</Typography.H2>
        </div>
    );
};
