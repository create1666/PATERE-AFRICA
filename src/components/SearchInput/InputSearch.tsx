import { Input } from '@mantine/core';
import classnames from 'classnames';
import React from 'react';

import { SearchIcon } from '../Reusables/SVGs/Svg';

// interface InputSearchProps {
//   classNameWrapper?: string;
//   classNameInput?: string;
//   IconClassName?: string;
//   handleSearch?: React.KeyboardEventHandler<HTMLInputElement>;
//   handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
//   query?: string | number | readonly string[];
// }

export type InputSearchProps = {
  id?: string;
  name?: string;
  query?: string | number | readonly string[];
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleSearch?: React.KeyboardEventHandler<HTMLInputElement>;
  classNameWrapper?: string;
  classNameInput?: string;
  IconClassName?: string;
};

export const InputSearch = ({
  classNameWrapper,
  classNameInput,
  IconClassName,
  handleSearch,
  handleInputChange,
  query,
  id,
  name,
}: InputSearchProps) => {
  return (
    <div>
      <Input
        id={id}
        name={name}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
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
