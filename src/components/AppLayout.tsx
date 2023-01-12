import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

import { HeaderNav } from './Header/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const linearGradient =
  'linear-gradient(135deg, hsla(210, 41%, 73%, 1) 0%, hsla(15, 10%, 92%, 1) 100%)';

export const AppShell = (props: IMainProps) => {
  return (
    <Box
      style={{ backgroundImage: linearGradient }}
      sx={() => ({
        boxSizing: 'border-box',
        paddingLeft: '4.875rem',
        paddingRight: '4.875rem',
        paddingTop: '1.875rem',
        width: '100vw',
        height: '100vh',
      })}
    >
      <HeaderNav />
      <>
        <div className="">{props.children}</div>
        {/** footer ---------------------------------------------------------------------*/}
        <div>Im a Footer</div>
      </>
    </Box>
  );
};
