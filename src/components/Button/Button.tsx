import { Button } from '@mantine/core';
import React from 'react';

export const ButtonShell = ({ children, className }: any) => {
  return <Button className={className}>{children}</Button>;
};
