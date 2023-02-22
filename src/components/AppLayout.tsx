import { Box, Button, Text } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { FooterLogo, PatereFooterLogo } from '../components/Reusables/SVGs/Svg';
// import About from '@/pages/about';
// import { FooterLogo } from "./Reusables/SVGs/Svg";
import FooterLogo from 'public/assets/images/FooterLogo.png';
import type { ReactNode } from 'react';

// import { HeaderNav } from './Header/Header';
// import { Hero } from './HeroSection/Hero';
import {
  ButtonFoo,
  ButtonFooRight,
  Instagram,
  Twitter,
  Youtube,
} from './Reusables/SVGs/Svg';
import { EmailInput } from './SearchInput/EmailField';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

// const linearGradient =
//   'linear-gradient(135deg, hsla(210, 41%, 73%, 1) 0%, hsla(15, 10%, 92%, 1) 100%)';
// const popularStock = [
//   'Sothema',
//   'FBN Holdings',
//   'Misr Fertilizers',
//   'LabelVie',
// ];

export const AppShell = (props: IMainProps) => {
  const router = useRouter();
  function handleChange() {
    router.push('/home');
  }

  return (
    <Box>
      <Box
        sx={() => ({
          // paddingLeft: '7.5rem',
          // paddingRight: '7.5rem',
        })}
      >
        {props.children}
      </Box>

      {/** footer ---------------------------------------------------------------------*/}
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
              <Box className="mb-5 text-[16px] font-[600] text-[#FFFFFF]">
                Stay updated with our weekly newsletter
              </Box>
              <EmailInput inputHeight="52px" />
              <Button className=" top-[.7rem]  h-[56px] w-[193px] bg-[#FF6700]">
                Search
              </Button>
              <Box className="mt-20 flex justify-end">
                <Text className=" text-[#FFFFFF]">
                  Terms and Condtions . Privacy Policy
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
