// import { useRouter } from 'next/router';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Button, Card, createStyles, Text } from '@mantine/core';
import classnames from 'classnames';
import Image from 'next/image';
import skeleton from 'public/assets/images/skeleton.png';
import visual_report from 'public/assets/images/visual-report-stats.png';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import { AccordionLayout } from '@/components/AccordionShell/AccordionLayout';
import { AppShell } from '@/components/AppLayout';
import { UserCardImage } from '@/components/Article/ArticleList';
import { ButtonShell } from '@/components/Button/Button';
import { CarouselComponent } from '@/components/Carousel/CarouselLayout';
import { HeaderNav } from '@/components/Header/Header';
import { Hero } from '@/components/HeroSection/Hero';
import {
  EasyToUnderstand,
  RightInformation,
  SaveTime,
} from '@/components/Reusables/SVGs/Svg';
import { InputSearch } from '@/components/SearchInput/InputSearch';
import { Meta } from '@/Seo/Meta';

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

const arrs = [
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

export const linearGradient =
  'linear-gradient(34deg, #fdddc9 11%, rgba(245,245,245,1) 38%, rgba(252,252,252,1) 66%)';

export const linearGradientHero =
  'linear-gradient(135deg, hsla(210, 41%, 73%, 1) 0%, hsla(15, 10%, 92%, 1) 100%)';
export const popularStock = [
  'Sothema',
  'FBN Holdings',
  'Misr Fertilizers',
  'LabelVie',
];

const Home = () => {
  const { classes } = useStyles();
  const [rating] = useState(5);

  const [query, setQuery] = useState('');
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: { key: string }) => {
    if (event.key === 'Enter') {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };
  const handleButtonClick = () => {
    window.location.href = `https://www.google.com/search?q=${query}`;
  };
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSc-Us-OHUVFA5DACXrkbQNdY58sWCAC6NtPdlgbMId2kiaFmw/viewform?usp=pp_url';

  const redirectToForm = () => {
    const emailPlaceholder = '';
    const namePlaceholder = '';
    const encodedEmailPlaceholder = encodeURIComponent(emailPlaceholder);
    const encodedNamePlaceholder = encodeURIComponent(namePlaceholder);
    const prefillUrl = `${formUrl}&entry.1113385170=${encodedEmailPlaceholder}&entry.871292895=${encodedNamePlaceholder}`; // Replace the field IDs with the appropriate ones from your form
    window.location.href = prefillUrl;
  };

  return (
    <AppShell
      meta={
        <Meta
          title="PATERE AFRICA"
          description="Patere creates an investor environment that attract and retain capitaln by telling the stories of Africa’s publicly listed companies from an investor’s angle."
        />
      }
    >
      <Box
        className=" invisible min-w-max  md:visible  "
        style={{ backgroundImage: linearGradientHero }}
        sx={() => ({
          paddingLeft: '7.5rem',
          paddingRight: '7.5rem',
          paddingTop: '1.875rem',
        })}
      >
        <HeaderNav onClick={redirectToForm} />
        <Hero
          popularStock={popularStock}
          hero
          inputSearchProps={{
            id: 'id-s1',
            name: 'search1',
            query,
            handleInputChange,
            handleSearch,
          }}
        />
      </Box>
      <Box
        style={{ backgroundImage: linearGradient }}
        sx={() => ({
          paddingLeft: '7.5rem',
          paddingRight: '7.5rem',
          paddingBottom: '2rem',
        })}
      >
        <Box
          sx={() => ({})}
          className="flex h-[539px]  justify-between  bg-[#FAFAFA] "
        >
          <Box className="mt-20">
            <Text className="text-[50px] font-[600] text-[#004E98]">
              Value Propositions
            </Text>
            <Text className="my-[28px] w-[646px] text-[16px] font-[500] text-[#A6A6A6]">
              To create an investor environment that attract and retain capitaln
              by telling the stories of Africa’s publicly listed companies from
              an investor’s angle.
            </Text>
            <ButtonShell
              className="mt-10 h-[56px] w-[248px] bg-[#004E98]"
              onClick={redirectToForm}
            >
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
        <Box>
          <Box className="mx-auto mb-4 mt-24 flex-wrap ">
            <Box className="flex w-[965ppx] flex-col items-center text-[50px] font-[600]  text-[#004E98]">
              <Box className="  ">
                <span className="font-extrabold text-[#004E98]">Unique</span>{' '}
                in-depth
                <span className="font-extrabold text-[#004E98]">
                  Visual Reports
                </span>{' '}
                for over
              </Box>
              <Box className="font-normal">100k stocks in Africa</Box>{' '}
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
                <AccordionLayout arrData={arrs} />
              </Box>
            </Box>
            <Box>
              <Image src={visual_report} alt={''} width="775" height="520" />
            </Box>
          </Box>
        </Box>
        <div className=" mb-10 flex h-auto w-[100%] flex-row items-center justify-between  bg-[#004E98] p-[40px]">
          <Box className=" w-fit text-[#ffff]">
            <Box className="text-[28px] font-[400]">
              What stock are you currently researching ?
            </Box>
            <Box className="w-fit text-[18px] font-[500]">
              Search any company to see the analysis plus any risks and rewards
              we’ve identified
            </Box>
          </Box>
          <Box className="relative flex  w-[40%]">
            <InputSearch
              query={query}
              handleInputChange={handleInputChange}
              handleSearch={handleSearch}
              classNameWrapper="w-[500px] "
              classNameInput="58px"
            />
            <Button
              onClick={handleButtonClick}
              className=" top-[0.0118rem] left-[-7.85rem] h-auto min-w-[125px] bg-[#FF6700] outline-[#ffff]"
            >
              Search
            </Button>
          </Box>
        </div>
        <Box className="p-0">
          <CarouselComponent
            title="Market Insights"
            component={UserCardImage}
            data={arrs}
            href="/more-articles"
          />
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
    </AppShell>
  );
};

// export const getStaticPaths = async () => {
//   const pathways = posts.map((post) => ({
//     params: { blogId: post.blogId.toString() },
//   }));
//   return {
//     paths: [...pathways],
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: { params: { blogId: any; }; }) => {
//   const blogId = context.params.blogId;
//   const article = posts.find((post) => blogId === post.blogId.toString());
//   const moreArticles = posts.filter(
//     (post) => blogId !== post.blogId.toString()

//   );
// console.log(moreArticles);
//   return { props: { article, moreArticles } };
// };
// https://docs.google.com/forms/d/e/1FAIpQLSc-Us-OHUVFA5DACXrkbQNdY58sWCAC6NtPdlgbMId2kiaFmw/viewform?usp=sf_link
const posts = [
  {
    title: 'Music',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 1,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'Crafting',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    blogId: 2,
    author: 'Paul Rand',
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },

  {
    title: 'Fashion',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    blogId: 3,
    author: 'Paul Rand',
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'Dance',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 4,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'Software Development',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 5,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'UI/UX',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 6,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'EATING',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 7,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'SLEEPING',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 8,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'COMERADE',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 9,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'JUDO',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 10,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'SINGING',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 11,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'DANCING',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 12,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'HUNTING',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 13,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
  {
    title: 'SWIMMING',
    excerpt: 'Without crafting, life would be a mistake.',
    cover_image: '/brush_cups.png',
    author: 'Paul Rand',
    blogId: 14,
    content: `Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.it non mi porta  
                     gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.`,
  },
];

export const getStaticProps = () => {
  return { props: { posts } };
};

export default Home;
