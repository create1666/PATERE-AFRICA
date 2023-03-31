// import { Box, Card, createStyles, Text } from "@mantine/core";
// import classnames from "classnames";
// import Image from "next/image";
// import skeleton from "public/assets/images/skeleton.png";
// import Team from "public/assets/images/Team.png";

// import { ButtonShell } from "@/components/Button/Button";
// import FooterLayout from "@/components/Footer/FooterLayout";
// import { HeaderNav } from "@/components/Header/Header";
// import { Hero } from "@/components/HeroSection/Hero";
// import {
//   EasyToUnderstand,
//   RightInformation,
//   SaveTime,
// } from "@/components/Reusables/SVGs/Svg";

// import { linearGradient, popularStock } from "../home";

// const useStyles = createStyles(() => ({
//   card: {
//     backgroundColor: "#FFFFFF",
//     border: "1px solid #E9E9E9",
//     boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
//     borderRadius: "21.4333px",
//     marginBottom: "2rem",
//     maxHeight: " 516px",
//     margin: " .5rem",
//     padding: "0 !important",
//   },
// }));
// const About = () => {
//   const { classes } = useStyles();

//   return (
//     <>
//       <Box
//         className="h-screen bg-[url('../../public/assets/images/heroimage.png')] bg-cover"
//         sx={() => ({
//           paddingLeft: "7.5rem",
//           paddingRight: "7.5rem",
//           paddingTop: "1.875rem",
//         })}
//       >
//         <HeaderNav onClick={() => ""} />
//         <HeaderNav onClick={() => ""} />
//         <Hero
//           about
//           popularStock={popularStock}
//           inputSearchProps={{
//             id: undefined,
//             name: undefined,
//             query: undefined,
//             handleInputChange: undefined,
//             handleSearch: undefined,
//           }}
//         />
//       </Box>

//       <Box
//         style={{ backgroundImage: linearGradient }}
//         sx={() => ({
//           paddingLeft: "7.5rem",
//           paddingRight: "7.5rem",
//           paddingBottom: "2rem",
//         })}
//       >
//         <Box className="flex items-center justify-between">
//           <Box>
//             <Image src={Team} alt={""} width="604" height="587" />
//           </Box>

//           <Box>
//             <Box className="text-[28px] font-[700] text-[#FF6700] ">
//               Our Expertise
//             </Box>
//             <Box className=" w-[599.19px] text-[45px] font-[500] text-[#004E98]">
//               We give best solution to grow up your business
//             </Box>
//             <Box className="w-[529px] text-[24px] font-[500] text-[#808095] ">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout.
//             </Box>
//             <Box className="flex justify-between">
//               <Box>
//                 <Text className="text-[36px] font-[700] text-[#004E98]">
//                   100+
//                 </Text>
//                 <Text className="text-[18px] font-[400] text-[#121B24]">
//                   Investment Platform
//                 </Text>
//               </Box>
//               <Box>
//                 <Text className="text-[36px] font-[700] text-[#004E98]">
//                   5K
//                 </Text>
//                 <Text className="text-[18px] font-[400] text-[#121B24]">
//                   Monthly active users
//                 </Text>
//               </Box>
//               <Box>
//                 <Text className="text-[36px] font-[700] text-[#004E98]">
//                   3X
//                 </Text>
//                 <Text className="text-[18px] font-[400] text-[#121B24]">
//                   Growth Rate
//                 </Text>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         <Box sx={() => ({})} className=" flex h-[539px]  justify-between  ">
//           <Box className="mt-20">
//             <Text className="text-[50px] font-[600] text-[#004E98]">
//               Value Propositions
//             </Text>
//             <Text className="my-[28px] w-[646px] text-[16px] font-[500] text-[#A6A6A6]">
//               To create an investor environment that attract and retain capitaln
//               by telling the stories of Africa’s publicly listed companies from
//               an investor’s angle.
//             </Text>
//             <ButtonShell
//               className="mt-10 h-[56px] w-[248px] bg-[#004E98]"
//               onClick={() => ""}
//             >
//               <Text className="text-[#FFFFFF]"> Get early access</Text>
//             </ButtonShell>
//           </Box>
//           <Box className="mt-20">
//             <Box>
//               <div className="flex">
//                 <RightInformation />
//                 <Box>
//                   <Text className="mb-5 text-[28px] font-[700] text-[#004E98]">
//                     Right information
//                   </Text>
//                   <Text className="w-[429.4px] text-[18px] font-[500] text-[#A6A6A6] ">
//                     Access reliable information on share prices, divident and
//                     news of publicly listed companies
//                   </Text>
//                 </Box>
//               </div>
//             </Box>
//             <Box className="my-10">
//               <div className="flex">
//                 <SaveTime />
//                 <Box>
//                   <Text className="mb-5 text-[28px] font-[700] text-[#004E98]">
//                     Save time and money
//                   </Text>
//                   <Text className="w-[429.4px] text-[18px] font-[500] text-[#A6A6A6] ">
//                     Save valuable time and money as equity research is
//                     time-consuming and very expensive.
//                   </Text>
//                 </Box>
//               </div>
//             </Box>
//             <Box>
//               <div className="flex">
//                 <EasyToUnderstand />
//                 <Box>
//                   <Text className="mb-5 text-[28px] font-[700] text-[#004E98]">
//                     Easy to understand
//                   </Text>
//                   <Text className="w-[429.4px] text-[18px] font-[500] text-[#A6A6A6] ">
//                     Access real time update of easy to use and understand equity
//                     research reports
//                   </Text>
//                 </Box>
//               </div>
//             </Box>
//           </Box>
//         </Box>

//         <div className="my-5 flex flex-col  items-center justify-center ">
//           <Box className="text-[28px] font-[700] text-[#FF6700]">Our Team</Box>
//           <Box className="text-[45px] font-[500] text-[#004E98]">
//             Meet Our Team
//           </Box>
//         </div>
//         <Box className=" flex items-center px-[200px]">
//           {Array(3)
//             .fill("")
//             .map((item) => {
//               return (
//                 <Card key={item} className={classnames(classes.card)}>
//                   <Box className="relative mb-3 w-[386px] border-gray-900 pb-72">
//                     <Image
//                       src={skeleton}
//                       alt={""}
//                       width="374"
//                       height="201"
//                       className="absolute h-full w-full rounded-md object-cover"
//                     />
//                   </Box>
//                   <Box className="p-5">
//                     <Box className="flex  flex-col items-center">
//                       <div>
//                         <Text className="text-[17.1467px] font-[700] text-[#3A6EA5]">
//                           Victoria Nnenna Ani
//                         </Text>
//                       </div>
//                       <div>
//                         <Text className="text-[15.003px] font-[400] text-[#5C7184] ">
//                           Ìnvestment Analyst
//                         </Text>
//                       </div>
//                     </Box>
//                   </Box>
//                 </Card>
//               );
//             })}
//         </Box>
//       </Box>
//       <FooterLayout />
//     </>
//   );
// };

// export default About;

// import { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import { HeaderNav } from '@/components/Header/Header';

function NavLink({ href, children }: any) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? 'font-bold text-red-500' : 'text-gray-500'
      } block px-4 py-2 hover:text-red-500`}
    >
      {children}
    </Link>
  );
}

const MarketInsights = () => {
  // const router = useRouter();
  // const { subpage } = router.query;
  // const [activeSubpage, setActiveSubpage] = useState(
  //   subpage?.replace(/-/g, " ") || "Consumer goods"
  // );

  // useEffect(() => {
  //   if (subpage) {
  //     setActiveSubpage(subpage.replace(/-/g, " "));
  //   }
  // }, [subpage]);

  return (
    <div className="">
      <HeaderNav onClick={() => ''} />
      <div className="flex">
        <div className="flex w-48 border-r">
          <NavLink href="/marketInsights/Consumer-goods">
            Consumer goods
          </NavLink>
          <NavLink href="/marketInsights/Energy">Energy</NavLink>
          <NavLink href="/marketInsights/Technology">Technology</NavLink>
          <NavLink href="/marketInsights/Financial-Services">
            Financial Services
          </NavLink>
          <NavLink href="/marketInsights/Health-care">Health care</NavLink>
          <NavLink href="/marketInsights/Podcast">Podcast</NavLink>
          <NavLink href="/marketInsights/Industrial-services">
            Industrial services
          </NavLink>
          <NavLink href="/marketInsights/Telecommunication">
            Telecommunication
          </NavLink>
        </div>
        {/* <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{activeSubpage}</h1>
        <p>Page content for {activeSubpage} goes here.</p>
      </div> */}
      </div>
    </div>
  );
};
export default MarketInsights;
