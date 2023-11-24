import {graphql, useStaticQuery} from 'gatsby';
import {Box} from '../../common/Box';
import Typography from '../../common/Typography/Typography';
import {ReloadIcon} from '../../../icons/ReloadIcon';
import {Hammer} from '../../common/Hammer';
import {useEffect, useState} from 'react';
import {css, keyframes} from '@emotion/react';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type Props = {
  onClick: (tags: string) => void;
};
export const TagListBox: React.FC<Props> = ({onClick}) => {
  const [isRotating, setIsRotating] = useState(false);
  const list = useStaticQuery(graphql`
    query BlogTagsList {
      allMdx {
        group(field: {frontmatter: {tags: SELECT}}) {
          text: fieldValue
          subText: totalCount
        }
      }
    }
  `).allMdx.group.sort(
    (a: {subText: number}, b: {subText: number}) => b.subText - a.subText,
  );

  useEffect(() => {
    if (isRotating) {
      setTimeout(() => setIsRotating(false), 1000);
    }
  }, [isRotating]);

  const handleReloadIconClick = () => {
    setIsRotating(true);
    onClick('');
  };

  return (
    <Box
      style={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 1rem;
        padding: 1.5rem;
        border-radius: 2.5rem;
      `}>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}>
        <Typography component="h3" variant="medium">
          Tags
        </Typography>
        <div
          onClick={handleReloadIconClick}
          css={css`
            animation: ${isRotating
              ? css`
                  ${rotate} 1s ease-in-out
                `
              : 'none'};
            width: 1.5rem;
            height: 1.5rem;
            &:hover {
              border-radius: 1rem;
            }
          `}>
          <ReloadIcon />
        </div>
      </div>
      {list ? (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            flex-grow: 1;
          `}>
          {list.map(({text, subText}: {text: string; subText: string}) => (
            <div
              key={text}
              onClick={() => onClick?.(text)}
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                &:hover {
                  text-decoration: underline;
                }
              `}>
              <Typography component="span" variant="p">
                {text}
              </Typography>
              <Typography component="span" variant="weak">
                {subText}
              </Typography>
            </div>
          ))}
        </div>
      ) : (
        <Hammer />
      )}
    </Box>
  );
};
