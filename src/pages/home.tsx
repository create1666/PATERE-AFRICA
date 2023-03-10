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
import { CarouselComponent } from '@/components/Carousel/CarouselLayout';
import { InputSearch } from '@/components/SearchInput/InputSearch';
import { Meta } from '@/Seo/Meta';

const useStyles = createStyles(() => ({
  card: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E9E9E9',
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '6.99864px',
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

const linearGradient =
  'linear-gradient(34deg, #fdddc9 11%, rgba(245,245,245,1) 38%, rgba(252,252,252,1) 66%)';
// "linear-gradient(77deg, rgba(255,178,126,1) 7%, rgba(245,245,245,1) 38%, rgba(252,252,252,1) 66%)";
// " linear-gradient(31deg, rgba(255,178,126,1) 7%, rgba(245,245,245,1) 38%, rgba(252,252,252,1) 66%)";
// "linear-gradient(22deg, rgba(255,178,126,1) 7%, rgba(245,245,245,1) 38%, rgba(252,252,252,1) 66%)";
// background: rgb(255,178,126);
// "linear-gradient(77deg, rgba(255,178,126,1) 7%, rgba(245,245,245,1) 38%, rgba(252,252,252,1) 66%)";
//  "linear-gradient(7deg, #f9e4da 7%, #ffffff 38%, #ffffff 66%)"
// const popularStock = [
//   "Sothema",
//   "FBN Holdings",
//   "Misr Fertilizers",
//   "LabelVie",
// ];

const Home = () => {
  const { classes } = useStyles();
  const [rating] = useState(5);
  // const{arr} = props

  //   const FilteredArticles = props.posts.reduce(
  //     (prevArticle: any, currentAarticle: any) => {
  //       return {
  //         ...prevArticle,
  //         [currentAarticle.title]: currentAarticle,
  //       };
  //     },
  // {}
  //   );
  // Object.getOwnPropertyNames(FilteredArticles);

  // console.log("FilteredArticles", FilteredArticles);

  return (
    <AppShell
      meta={
        <Meta
          title="PATERE AFRICA"
          description="Patere creates an investor environment that attract and retain capitaln by telling the stories of Africa???s publicly listed companies from an investor???s angle."
        />
      }
    >
      <Box
        style={{ backgroundImage: linearGradient }}
        sx={() => ({
          paddingLeft: '4.875rem',
          paddingRight: '4.875rem',
          paddingTop: '10.875rem',
          paddingBottom: '2rem',
        })}
      >
        <Box>
          <Box className="mx-auto  mb-4 -mt-24 flex-wrap ">
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
        <div className=" mb-10 flex h-[198px] items-center justify-between bg-[#004E98] p-[40px]">
          <Box className="text-[#ffff]">
            <Box className="text-[28px] font-[400]">
              What stock are you currently researching ?
            </Box>
            <Box className="text-[18px] font-[500]">
              Search any company to see the analysis plus any risks and rewards
              we???ve identified
            </Box>
          </Box>
          <Box className="relative flex overflow-auto">
            <InputSearch classNameWrapper="w-[500px] " classNameInput="58px" />
            <Button className=" top-[0.11rem] -left-[8rem] h-[54px] w-[125px] bg-[#FF6700] outline-[#ffff]">
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
                <Card
                  key={item}
                  radius="md"
                  className={classnames(classes.card)}
                >
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
                    <Box className=" max-w-[18.084rem my-10 text-[#004E98]">
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
