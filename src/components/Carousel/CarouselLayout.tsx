import { Carousel } from '@mantine/carousel';
import React from 'react';

export const CarouselLayout = ({ children }: any) => {
  return (
    <Carousel
      sx={{ maxWidth: 320 }}
      mx="auto"
      withIndicators
      height={200}
      styles={{
        indicator: {
          width: 12,
          height: 4,
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: 40,
          },
        },
      }}
    >
      <div>{children}</div>
    </Carousel>
  );
};
