import styled from '@emotion/styled';

const H1 = styled.h1`
    color: ${({theme}) => theme.colors.colorPoint01};
    font-family: 'Pretendard', serif;
    font-size: ${({theme}) => theme.fontSizes.xxxl};
    font-weight: 700;
`;

const H2 = styled.h2`
    color: ${({theme}) => theme.colors.colorPoint02};
    font-family: 'Pretendard', serif;
    font-size: ${({theme}) => theme.fontSizes.xxl};
    font-weight: 700;
`;

const H3 = styled.h3`
    color: ${({theme}) => theme.colors.colorPoint03};
    font-family: 'Pretendard', serif;
    font-size: ${({theme}) => theme.fontSizes.xl};
    font-weight: 600;
`;

const H4 = styled.h4`
    color: ${({theme}) => theme.colors.colorPoint04};
    font-family: 'Pretendard', serif;
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-weight: 600;
`;

const H5 = styled.h5`
    color: ${({theme}) => theme.colors.colorPoint05};
    font-family: 'Pretendard', serif;
    font-size: ${({theme}) => theme.fontSizes.md};
    font-weight: 500;
`;

const H6 = styled.h6`
    color: ${({theme}) => theme.colors.colorPoint06};
    font-family: 'Pretendard', serif;
    font-size: ${({theme}) => theme.fontSizes.base};
    font-weight: 500;
`;

const P = styled.h6`
    color: ${({theme}) => theme.colors.grayscaleBlack};
    font-family: 'Pretendard', serif;
    font-size: ${({theme}) => theme.fontSizes.base};
    font-weight: 400;
`;

const Medium = styled.p<{status: boolean}>`
    ${({status, theme}) => `
        color: ${
            status ? theme.colors.grayscaleBlack : theme.colors.grayscaleBlack
        };
        font-size: ${theme.fontSizes.md};
        font-weight: ${status ? '600' : '400'};
    `}
    font-family: 'Pretendard', serif;
`;

const Weak = styled.p`
    color: ${({theme}) => theme.colors.grayscale02};
    font-family: 'Pretendard', serif;
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: 400;
`;

export default {H1, H2, H3, H4, H5, H6, P, Medium, Weak};
