import { Input } from '@mantine/core';
import classnames from 'classnames';
import React from 'react';

import { Email } from '../Reusables/SVGs/Svg';

export type EmailInputProps = {
  id?: string;
  name?: string;
  emailValue?: string | number | readonly string[];
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  classNameWrapper?: string;
  classNameInput?: string;
  IconClassName?: string;
  inputHeight?: string;
};
export const EmailInput = ({
  classNameWrapper,
  inputHeight,
  IconClassName,
  emailValue,
  handleInputChange,
}: EmailInputProps) => {
  return (
    <div className="">
      <Input
        type="email"
        value={emailValue}
        onChange={handleInputChange}
        className={classnames(
          'placeholdr',
          ' flex  text-[12px] font-[400]',
          classNameWrapper
        )}
        icon={<Email />}
        placeholder="Email address"
        styles={{
          icon: {
            fontWeight: 400,
            left: 3,
            height: IconClassName,
          },
        }}
        sx={() => ({
          input: {
            height: inputHeight,
          },
        })}
      />
    </div>
  );
};
