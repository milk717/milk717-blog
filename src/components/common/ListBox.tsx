import {Box} from './Box';
import {css} from '@emotion/react';
import React, {FC} from 'react';
import {Hammer} from './Hammer';

type Props = {
  title: string;
  list?: {text: string; subText: string}[];
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
      <h3
        css={css`
          text-align: center;
          font-size: 1.125rem;
        `}>
        {title}
      </h3>
      {list ? (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            row-gap: 0.5rem;
            flex-grow: 1;
          `}>
          {list.map(({text, subText}) => (
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}>
              <p
                css={css`
                  font-size: 1rem;
                `}>
                {text}
              </p>
              <p
                css={css`
                  font-size: 0.8rem;
                `}>
                {subText}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <Hammer />
      )}
    </Box>
  );
};
