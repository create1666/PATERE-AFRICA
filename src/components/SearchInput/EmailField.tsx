import { Input } from '@mantine/core';
import classnames from 'classnames';
import React from 'react';

import { Email } from '../Reusables/SVGs/Svg';

export const EmailInput = ({
  classNameWrapper,
  inputHeight,
  IconClassName,
}: any) => {
  return (
    <div className="">
      <Input
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
