// import { useRouter } from 'next/router';

import { Box } from '@mantine/core';
import Image from 'next/image';
import visual_report from 'public/assets/images/visual-report-stats.png';

import { AccordionLayout } from '@/components/AccordionShell/AccordionLayout';
import { AppShell } from '@/components/AppLayout';
import { Hero } from '@/components/HeroSection/Hero';
import { Meta } from '@/Seo/Meta';

const popularStock = [
  'Sothema',
  'FBN Holdings',
  'Misr Fertilizers',
  'LabelVie',
];

const arr = [
  {
    label: 'Growth Forecast',
    value: 'GrowthForecast',
    description:
      'Colors, fonts, shadows and many other parts are customizable to fit your design needs',
  },
  {
    label: 'Valuation',
    value: 'Valuation',
    description:
      'Colors, fonts, shadows and many other parts are customizable to fit your design needs',
  },
  {
    label: 'Financial Health',
    value: 'FinancialHealth',
    description:
      'Colors, fonts, shadows and many other parts are customizable to fit your design needs',
  },
  {
    label: 'Divident',
    value: 'Divident',
    description:
      'Colors, fonts, shadows and many other parts are customizable to fit your design needs',
  },
  {
    label: 'Management',
    value: 'Management',
    description:
      'Colors, fonts, shadows and many other parts are customizable to fit your design needs',
  },
  {
    label: 'Insider Transaction',
    value: 'InsiderTransaction',
    description:
      'Colors, fonts, shadows and many other parts are customizable to fit your design needs',
  },
];

const Home = () => {
  return (
    <AppShell
      meta={
        <Meta
          title="PATERE AFRICA"
          description="Patere creates an investor environment that attract and retain capitaln by telling the stories of Africa’s publicly listed companies from an investor’s angle."
        />
      }
    >
      <Hero popularStock={popularStock} />
      <Box>
        <Box className="mx-auto  mb-4 -mt-24 h-[122px] w-[965px] flex-wrap font-[600]">
          <Box className="flex flex-col items-center text-2xl text-[#004E98]">
            <Box>
              <span className="font-extrabold text-[#004E98]">Unique</span>{' '}
              in-depth
              <span className="font-extrabold text-[#004E98]">
                Visual Reports
              </span>{' '}
              for over
            </Box>
            <Box>100k stocks in Africa</Box>{' '}
          </Box>
        </Box>

        <Box className="flex justify-between">
          <Box>
            <Box className="h-[38px] w-[307px] text-[32px] font-[500] text-[#004E98] ">
              Risk & Rewards
            </Box>

            <Box className="my-8 w-[415px] text-[18px] font-[500] text-[#A6A6A6]">
              Get key insights extracted from our unique analysis model that
              helps you stay on top of the market and take advantage when they
              are right
            </Box>
            <Box className="max-w-[415px] ">
              {/** @ts-ignore */}
              <AccordionLayout arrData={arr} />
            </Box>
          </Box>
          <Box>
            <Image src={visual_report} alt={''} width="775" height="520" />
          </Box>
        </Box>
      </Box>
    </AppShell>
  );
};

export default Home;
