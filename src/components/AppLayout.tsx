import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

import FooterLayout from './Footer/FooterLayout';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const AppShell = (props: IMainProps) => {
  // const [open, setOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   let notificationTimeout: ReturnType<typeof setTimeout>;
  //   if (open) {
  //     notificationTimeout = setTimeout(() => {
  //       setOpen(false);
  //     }, 5000);
  //     return () => clearTimeout(notificationTimeout);
  //   }
  //   return () => {};
  // }, [open]);
  return (
    <Box>
      {/* <CustomNotification
        message="thank you"
        title="subscribed successfully"
        color="teal"
        onClose={handleCloseBtn}
        position="top-right"
        transition="slide"
        autoClose={open}
      /> */}
      <Box>{props.children}</Box>
      {/** footer ---------------------------------------------------------------------*/}
      <FooterLayout />
    </Box>
  );
};
