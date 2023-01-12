import { Box, Input } from '@mantine/core';
import React from 'react';

import {
  CardDashboardSvg,
  DashBoardSvg,
  SearchIcon,
  UnderLineVectorAccent,
} from '../Reusables/SVGs/Svg';

export const Hero = (props: { popularStock: any[] }) => {
  return (
    <Box>
      <div className="">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '4.688rem',
            height: '100vh',
            overflow: 'scroll',
          }}
        >
          <Box>
            <Box
              sx={{
                width: '34.688rem',
                height: '16.875rem',
                fontfamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '80px',
                lineHeight: '90px',
                color: '#004E98',
                marginBottom: '23px',
              }}
            >
              Make smart investment decisions
            </Box>
            <UnderLineVectorAccent />
            <Box
              sx={{
                marginTop: '49px',
                marginBottom: '66px',
                width: '461px',
                height: '60px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '30px',
                color: '#3A6EA5',
              }}
            >
              Get the most comprehensive stock analysis for free and make better
              investment decisions.
            </Box>
            <Box>
              <Box
                sx={{
                  color: ' #3A6EA5',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '15px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  width: '152px',
                  height: '15px',
                  marginBottom: '.5rem',
                }}
              >
                Search any stock
              </Box>
              <Input
                className="placeholdr"
                icon={<SearchIcon />}
                placeholder="Search any stock to research for free"
                styles={{
                  icon: {
                    fontWeight: 400,
                    left: 25,
                    height: '52px',
                  },
                }}
                sx={() => ({
                  input: {
                    width: '304px',
                    height: '52px',
                    paddingLeft: '4rem',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    display: 'flex',
                  },
                })}
              />
              <Box className="flex flex-row items-center">
                <span className="text-[12px] font-[400] text-[#666666]">
                  Popular Stock :
                </span>
                <span className="ml-2 flex flex-row">
                  {props.popularStock.map(
                    (
                      item:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined,
                      index: React.Key | null | undefined
                    ) => (
                      <Box
                        className=" p-2 text-[12px] font-[400] text-[#FF6700]"
                        key={index}
                      >
                        <div>{item}</div>
                      </Box>
                    )
                  )}
                </span>
              </Box>
            </Box>
          </Box>

          <Box className="">
            <DashBoardSvg className="absolute top-20 right-1 min-h-[548.98] min-w-[772px]" />
          </Box>
        </Box>
        <CardDashboardSvg className="absolute right-[33rem] top-[27.2rem]" />
      </div>
    </Box>
  );
};
