// import { AppShell } from '@/components/AppLayout';
// import { Meta } from '@/Seo/Meta';
import { Box, Card, createStyles, Text } from '@mantine/core';
import classnames from 'classnames';
// import { url } from 'inspector';
import Image from 'next/image';
import skeleton from 'public/assets/images/skeleton.png';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import { ButtonShell } from '@/components/Button/Button';
import FooterLayout from '@/components/Footer/FooterLayout';
import { HeaderNav } from '@/components/Header/Header';
import { Hero } from '@/components/HeroSection/Hero';
import {
  EasyToUnderstand,
  RightInformation,
  SaveTime,
} from '@/components/Reusables/SVGs/Svg';

import { linearGradient, popularStock } from './home';

const useStyles = createStyles(() => ({
  card: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E9E9E9',
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '21.4333px',
    marginBottom: '2rem',
    maxHeight: ' 516px',
    margin: '1rem',
  },
}));
const About = () => {
  const { classes } = useStyles();
  const [rating] = useState(5);
  return (
    <>
      <Box
        className="h-screen bg-[url('../../public/assets/images/heroimage.png')] bg-cover"
        sx={() => ({
          paddingLeft: '7.5rem',
          paddingRight: '7.5rem',
          paddingTop: '1.875rem',
        })}
      >
        <HeaderNav />
        <Hero popularStock={popularStock} />
      </Box>

      <Box
        style={{ backgroundImage: linearGradient }}
        sx={() => ({
          paddingLeft: '7.5rem',
          paddingRight: '7.5rem',
          paddingBottom: '2rem',
        })}
      >
        <Box sx={() => ({})} className=" flex h-[539px]  justify-between  ">
          <Box className="mt-20">
            <Text className="text-[50px] font-[600] text-[#004E98]">
              Value Propositions
            </Text>
            <Text className="my-[28px] w-[646px] text-[16px] font-[500] text-[#A6A6A6]">
              To create an investor environment that attract and retain capitaln
              by telling the stories of Africa’s publicly listed companies from
              an investor’s angle.
            </Text>
            <ButtonShell className="mt-10 h-[56px] w-[248px] bg-[#004E98]">
              <Text className="text-[#FFFFFF]"> Get early access</Text>
            </ButtonShell>
          </Box>
          <Box className="mt-20">
            <Box>
              <div className="flex">
                <RightInformation />
                <Box>
                  <Text className="mb-5 text-[28px] font-[700] text-[#004E98]">
                    Right information
                  </Text>
                  <Text className="w-[429.4px] text-[18px] font-[500] text-[#A6A6A6] ">
                    Access reliable information on share prices, divident and
                    news of publicly listed companies
                  </Text>
                </Box>
              </div>
            </Box>
            <Box className="my-10">
              <div className="flex">
                <SaveTime />
                <Box>
                  <Text className="mb-5 text-[28px] font-[700] text-[#004E98]">
                    Save time and money
                  </Text>
                  <Text className="w-[429.4px] text-[18px] font-[500] text-[#A6A6A6] ">
                    Save valuable time and money as equity research is
                    time-consuming and very expensive.
                  </Text>
                </Box>
              </div>
            </Box>
            <Box>
              <div className="flex">
                <EasyToUnderstand />
                <Box>
                  <Text className="mb-5 text-[28px] font-[700] text-[#004E98]">
                    Easy to understand
                  </Text>
                  <Text className="w-[429.4px] text-[18px] font-[500] text-[#A6A6A6] ">
                    Access real time update of easy to use and understand equity
                    research reports
                  </Text>
                </Box>
              </div>
            </Box>
          </Box>
        </Box>

        <div className="my-5 flex justify-center text-[50px] font-[600] text-[#004E98]">
          What people say about us
        </div>
        <Box className="mb-10 flex p-0">
          {Array(3)
            .fill('')
            .map((item) => {
              return (
                <Card key={item} className={classnames(classes.card)}>
                  <Box className="p-5">
                    <Box>
                      {' '}
                      <Rating
                        initialValue={rating}
                        className=""
                        size={15}
                        fillColor="#FF6700"
                      />
                    </Box>
                    <Box className=" mb-10  text-[#004E98]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                    </Box>
                    <Box className="flex ">
                      <Box className="relative mr-20 pb-4">
                        <Image
                          src={skeleton}
                          alt={''}
                          className="  absolute  h-[51.44px] w-[51.44px] rounded-full"
                        />
                      </Box>
                      <Box>
                        <Text className="text-[17.1467px] font-[700] text-[#3A6EA5]">
                          Asantee Milly
                        </Text>
                        <Text className="text-[15.003px] font-[400] text-[#5C7184] ">
                          Lagos. Nigeria
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              );
            })}
        </Box>
      </Box>
      <FooterLayout />
    </>
  );
};

export default About;
