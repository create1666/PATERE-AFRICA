import { Button } from '@mantine/core';
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
export const ButtonShell: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <Button onClick={onClick} className={className}>
      {children}
    </Button>
  );
};
