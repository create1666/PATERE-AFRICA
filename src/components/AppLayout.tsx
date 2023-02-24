import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

import FooterLayout from './Footer/FooterLayout';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const AppShell = (props: IMainProps) => {
  return (
    <Box>
      <Box>{props.children}</Box>
      {/** footer ---------------------------------------------------------------------*/}
      <FooterLayout />
    </Box>
  );
};
