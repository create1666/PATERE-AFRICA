import { Box } from '@mantine/core';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

import { useWindowSize } from '../Reusables/Hooks/useWindowSize';
import { NextButton, PreviousButton } from '../Reusables/SVGs/Svg';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const Next = (props: { className: any; onClick: any; style: any }) => {
  const { className, onClick, style } = props;

  return (
    <button style={{ ...style }} onClick={onClick} className={className}>
      <NextButton />
    </button>
  );
};

const Previous = (props: { className: any; onClick: any; style: any }) => {
  const { className, onClick, style } = props;

  return (
    <button style={{ ...style }} onClick={onClick} className={className}>
      <PreviousButton />
    </button>
  );
};

const responsiveUtility = (width: number, gap: any) => {
  const MAX_WIDTH = 1100;
  const responsive: any[] = [];
  for (let screenWidth = MAX_WIDTH; screenWidth >= width; screenWidth -= 50) {
    const slidesToShow = screenWidth / (width + gap);
    const slidesToScroll = Math.floor(slidesToShow);
    const point = {
      breakpoint: screenWidth,
      settings: {
        slidesToScroll: Math.max(1, slidesToScroll),
        slidesToShow: Math.max(1, slidesToShow),
        arrows: false,
      },
    };
    responsive.concat(point);
  }
  return responsive;
};

export const CarouselComponent = ({ href, ...props }: any) => {
  const size = useWindowSize();
  const {
    data = [],
    component: Component,
    gap = 20,
    width = 410,
    title,
  } = props;
  const customSettings = React.useMemo(() => {
    const slidesToShow = 1440 / (width + gap + 50);
    const dotts = Number(size?.width) >= 1440 && true;

    return {
      dotts,
      appendDots: (dots: any) => <ul>{dots}</ul>,
      customPaging: () => (
        <div className="ft-slick__dots--custom">
          <div className="" />
        </div>
      ),
      infinite: false,
      speed: 500,
      arrow: false,
      nextArrow: <Next className="" onClick={undefined} style={undefined} />,
      prevArrow: (
        <Previous className="" onClick={undefined} style={undefined} />
      ),
      slidesToShow,
      slidesToScroll: Math.floor(slidesToShow),
      initialSlide: 0,
      responsive: responsiveUtility(width, gap),
    };
  }, [size?.width]);
  return (
    <Box className="">
      {title && (
        <header className="flex items-center justify-between">
          <h3 className="title m-0">{title}</h3>
        </header>
      )}
      <div className="">
        <Slider className=" " {...customSettings}>
          {data.map((item: any, index: React.Key | null | undefined) => (
            <div key={`${index}`} className="  ">
              <Component stats={item} index={index} />
            </div>
          ))}
        </Slider>
      </div>
      <span className="flex justify-end  ">
        <Link
          href={`${href}`}
          className="text-[#FF6700] decoration-transparent"
        >
          Read more articles
        </Link>
      </span>
    </Box>
  );
};
