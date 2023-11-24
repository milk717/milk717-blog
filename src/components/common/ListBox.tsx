import {Box} from './Box';
import {css} from '@emotion/react';
import React, {FC} from 'react';
import {Hammer} from './Hammer';
import Typography from './Typography/Typography';

type Props = {
  title: string;
  list?: {text: string; subText: number}[];
};

export const ListBox: FC<Props> = ({title, list}) => {
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
          {title}
        </Typography>
      </div>
      {list ? (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            flex-grow: 1;
          `}>
          {list.map(({text, subText}) => (
            <div
              key={text}
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
