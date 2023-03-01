import { Box } from '@mantine/core';
import React from 'react';

import {
  CardDashboardSvg,
  DashBoardSvg,
  UnderLineVectorAccent,
} from '../Reusables/SVGs/Svg';
import type { InputSearchProps } from '../SearchInput/InputSearch';
import { InputSearch } from '../SearchInput/InputSearch';

interface HeroProps {
  // define other props for your sub-child component here
  popularStock: any[];
  hero?: boolean;
  about?: boolean;
  handleSearch?: React.KeyboardEventHandler<HTMLInputElement>;
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  query?: string | number | readonly string[];
  // ... extend InputSearch component props here
  inputSearchProps: InputSearchProps;
}

export const Hero = ({
  popularStock,
  hero = false,
  about = false,
  inputSearchProps,
}: HeroProps) => {
  return (
    <>
      {about && (
        <div className="">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '4.688rem',
            }}
          >
            <Box>
              <Box className="w-[34.688 rem] pt-52 text-[80px] font-[600] text-[#004E98]">
                About <span className="text-[#FF6700]">Us</span>
              </Box>
              <Box className="w-[670px] text-[18px] font-[500] text-[#3A6EA5]">
                Get the most comprehensive stock analysis for free and make
                better investment decisions.It is a long established fact that a
                reader will be distracted by the readable content of a page when
                looking at its layout.
              </Box>
            </Box>
          </Box>
        </div>
      )}

      {hero && (
        <Box>
          <div className="">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '4.688rem',
              }}
            >
              <Box>
                <Box className="w-[555px] text-[80px] font-[600] leading-[90px]  text-[#004E98]">
                  Make smart investment decisions
                </Box>
                <UnderLineVectorAccent />
                <Box className="mt-[49px] mb-[66px] w-[461px] text-[18px] font-[500] text-[#3A6EA5]">
                  Get the most comprehensive stock analysis for free and make
                  better investment decisions.
                </Box>
                <Box>
                  <Box className="mb-[.5rem] w-[152px] text-[12px] font-[500]  text-[#3A6EA5]">
                    Search any stock
                  </Box>
                  <InputSearch
                    {...inputSearchProps}
                    classNameWrapper=" w-[304px]"
                    classNameInput="52px"
                    IconClassName="52px"
                  />
                  <Box className="flex flex-row items-center">
                    <span className="text-[12px] font-[400] text-[#666666]">
                      Popular Stock :
                    </span>
                    <span className="ml-2 flex flex-row">
                      {popularStock.map((item, index) => (
                        <Box
                          className=" p-2 text-[12px] font-[400] text-[#FF6700]"
                          key={index}
                        >
                          <div>{item}</div>
                        </Box>
                      ))}
                    </span>
                  </Box>
                </Box>
              </Box>

              <Box className="">
                <DashBoardSvg className="absolute right-[0] top-20 min-h-[548.98] min-w-[772px]" />
              </Box>
            </Box>
            <CardDashboardSvg className="absolute right-[33rem] top-[27.2rem]" />
          </div>
        </Box>
      )}
    </>
  );
};
