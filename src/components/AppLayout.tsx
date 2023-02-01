import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { FooterLogo, PatereFooterLogo } from '../components/Reusables/SVGs/Svg';
// import About from '@/pages/about';
// import { FooterLogo } from "./Reusables/SVGs/Svg";
import FooterLogo from 'public/assets/images/FooterLogo.png';
import type { ReactNode } from 'react';

import { HeaderNav } from './Header/Header';
import { Hero } from './HeroSection/Hero';
import { ButtonFoo, ButtonFooRight } from './Reusables/SVGs/Svg';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const linearGradient =
  'linear-gradient(135deg, hsla(210, 41%, 73%, 1) 0%, hsla(15, 10%, 92%, 1) 100%)';
const popularStock = [
  'Sothema',
  'FBN Holdings',
  'Misr Fertilizers',
  'LabelVie',
];

export const AppShell = (props: IMainProps) => {
  const router = useRouter();
  function handleChange() {
    router.push('/home');
  }

  return (
    <Box>
      <Box
        style={{ backgroundImage: linearGradient }}
        sx={() => ({
          // boxSizing: 'border-box',
          paddingLeft: '4.875rem',
          paddingRight: '4.875rem',
          paddingTop: '1.875rem',
          width: '100vw',
          height: '100vh',
        })}
      >
        <HeaderNav />
        {router.pathname.includes('home') && (
          <Hero popularStock={popularStock} />
        )}
      </Box>

      <Box className="">{props.children}</Box>

      {/** footer ---------------------------------------------------------------------*/}
      <Box
        sx={() => ({
          paddingLeft: '4.875rem',
          paddingRight: '4.875rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        })}
        className="flex bg-[#004E98]"
      >
        <Box className="flex">
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
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};
