import React, {ReactNode} from 'react';
import {css, Theme, useTheme} from '@emotion/react';
import {ThemeType} from '../../styles/theme';
import {Interpolation} from '@emotion/serialize';

type Props = {
    children: ReactNode;
    style?: Interpolation<Theme>;
};

export const Box: React.FC<Props> = ({children, style}) => {
    const theme = useTheme() as ThemeType;
    return (
        <div
            css={[
                css`
                    border: 1px solid ${theme.colors.grayscaleWhite};
                    opacity: 0.64;
                    background: ${theme.gradients.surface};
                    box-shadow: ${theme.shadows.surface};
                `,
                style,
            ]}>
            {children}
        </div>
    );
};
