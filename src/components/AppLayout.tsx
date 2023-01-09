import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

import { HeaderNav } from './Header/Header';

// const useStyles = createStyles((theme) => ({
//   myBackgroundColor: {
//     background: theme.fn.linearGradient(0, '#9CB9D6', '#ECE9E8'),
//     background: linear-gradient(135deg, hsla(210, 41%, 73%, 1) 0%, hsla(15, 10%, 92%, 1) 100%)
//   },
// }));

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const linearGradient =
  'linear-gradient(135deg, hsla(210, 41%, 73%, 1) 0%, hsla(15, 10%, 92%, 1) 100%)';

export const AppShell = (props: IMainProps) => {
  // const { classes } = useStyles();
  return (
    <div style={{ backgroundImage: linearGradient }}>
      <Box
        sx={() => ({
          boxSizing: 'border-box',
          padding: '4.875rem',
          width: '100vw',
          height: '100vh',
        })}
      >
        <HeaderNav />
        <div className="">
          <div className="">{props.children}</div>

          {/** footer ---------------------------------------------------------------------*/}
          <div>Im a Footer</div>
        </div>
      </Box>
    </div>
  );
};
