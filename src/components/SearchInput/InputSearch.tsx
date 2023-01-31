import { Input } from '@mantine/core';
import classnames from 'classnames';
import React from 'react';

import { SearchIcon } from '../Reusables/SVGs/Svg';

export const InputSearch = ({
  classNameWrapper,
  classNameInput,
  IconClassName,
}: any) => {
  return (
    <div>
      <Input
        className={classnames(
          'placeholdr',
          ' flex text-[12px] font-[400] ',
          classNameWrapper
        )}
        icon={<SearchIcon />}
        placeholder="Search any stock to research for free"
        styles={{
          icon: {
            fontWeight: 400,
            left: 3,
            height: IconClassName,
          },
        }}
        sx={() => ({
          input: {
            height: classNameInput,
          },
        })}
      />
    </div>
  );
};
