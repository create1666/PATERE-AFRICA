import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FooterLogo from 'public/assets/images/FooterLogo.png';
import React from 'react';

import Newsletter from '../NewsLetter/NewsLetter';
import {
  ButtonFoo,
  ButtonFooRight,
  Instagram,
  Twitter,
  Youtube,
} from '../Reusables/SVGs/Svg';

const FooterLayout = () => {
  const router = useRouter();
  function handleChange() {
    router.push('/home');
  }
  return (
    <Box
      sx={() => ({
        paddingLeft: '7.5rem',
        paddingRight: '7.5rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      })}
      className="bg-[#004E98]"
    >
      <Box className="flex justify-between">
        <Box>
          <Box className="mb-6 flex items-center">
            <Image
              src={FooterLogo}
              alt={'Patere footer Logo'}
              className="h-[25px] w-[25px]"
            />
            <Text
              sx={{ color: '#FFFFFF', padding: '0.19rem', fontWeight: 600 }}
            >
              PATERE AFRICA
            </Text>
          </Box>
          <Box className="h-[60px] w-[330px]">
            <Text className="text-[14px] text-[#ECECEB]">
              Maximize your investment in the capital market world with the
              convenience and various features provided by Patere.
            </Text>
          </Box>
          <Box className="flex ">
            <Box onClick={handleChange} className="mt-5 mr-5 cursor-pointer">
              <ButtonFoo className="" />
            </Box>
            <Box className="mt-5 cursor-pointer">
              <ButtonFooRight className="" />
            </Box>
          </Box>

          <Box>
            <Text className="mt-10 mb-5 text-[#FFFFFF]">
              © 2022 Patere Inc. Copyright and rights reserved
            </Text>
          </Box>
        </Box>
        <Box className="w-[450px] ">
          <Box className="mb-5 flex items-start justify-between text-[16px] font-[600] text-[#FFFFFF] ">
            <Box className="">About Us</Box>
            <Box>Plans</Box>
            <Box>Help Center</Box>
            <Box>Login</Box>
          </Box>
          <Box className="mb-3 text-[14px] font-[400] text-[#ECECEB]">
            Patere Africa Headquaters <br /> Patere Africa LTD <br />
            52 Johnson Avenue Ota Adamawa. Nigeria
          </Box>
          <Box className="flex items-center">
            <Twitter />
            <Instagram className="mx-5" />
            <Youtube />
          </Box>
        </Box>
        <Box>
          <Box className="w-[513px]">
            <Newsletter />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterLayout;
