import {graphql, useStaticQuery} from 'gatsby';
import {Box} from '../../common/Box';
import {css} from '@emotion/react';
import Typography from '../../common/Typography/Typography';
import {ArrowDownIcon} from '../../../icons/ArrowDownIcon';
import {SyntheticEvent, useEffect, useState} from 'react';
import {HashTagIcon} from '../../../icons/HashTagIcon';
import {theme} from '../../../styles/theme';
import useWindowWidth from '../../../hooks/useWindowWidth';

type Props = {
  selectedTag: string;
  onClick: (tags: string) => void;
};
export const TagDropdown: React.FC<Props> = ({selectedTag, onClick}) => {
  const windowWidth = useWindowWidth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const isHigherThanTablet =
    windowWidth >= Number(theme.breakpoints.tablet.replace('px', ''));

  useEffect(() => {
    setIsDropdownOpen(isHigherThanTablet);
  }, [windowWidth]);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleTagClick = (e: SyntheticEvent, tag: string) => {
    e.stopPropagation();
    onClick(tag);
  };

  return (
    <Box
      onClick={() => !isHigherThanTablet && handleDropdownOpen()}
      style={css`
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        padding: 1rem 2rem;
        border-radius: 2.5rem;
        cursor: pointer;
      `}>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          row-gap: 1rem;
        `}>
        <Typography
          variant="medium"
          css={css`
            display: flex;
            align-items: center;
            column-gap: 0.25rem;
            font-weight: 600;
          `}>
          <HashTagIcon />
          {selectedTag}
        </Typography>
        <div
          css={css`
            display: none;
            @media (max-width: ${theme.breakpoints.tablet}) {
              display: block;
            }
          `}>
          <ArrowDownIcon />
        </div>
      </div>
      {isDropdownOpen && (
        <div
          css={css`
            height: 100%;
            overflow-y: scroll;

            @media (max-width: ${theme.breakpoints.tablet}) {
              height: 12rem;
            }
          `}>
          <div
            key="all"
            onClick={e => handleTagClick(e, 'All')}
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
              {`All  (${list.length}) `}
            </Typography>
          </div>
          {list.map(({text, subText}: {text: string; subText: string}) => (
            <div
              key={text}
              onClick={e => handleTagClick(e, text)}
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
                {`${text}  (${subText}) `}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
};
