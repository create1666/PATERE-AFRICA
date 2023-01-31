// import React from "react";
// import Link from "next/link";
// import styled from "styled-components";
// import Router from "next/router";

// const Wrapper = styled.div`
//   width: 100%;
// `;

// const ArticleComponent = React.forwardRef((props, ref) => {
//   const { item: post, onClick } = props;
//   const toCoursePage = () => {
//     Router.push({
//       pathname: `/blog/${post.blogId}`,
//     });
//     onClick && onClick();
//     window.scrollTo(0, 0);
//   };
//   return (
//     <Wrapper ref={ref} onClick={toCoursePage}>
//       <div className="article-cont">
//         <div>
//           <img src="/brush_cups.png" id="img" />
//           <div className="text-cont p-3">
//             <h4>{post.title}</h4>
//             <p className="p-norm p-grey">{post.excerpt}</p>
//             <Link href={`/blog/${post.blogId}`}>
//               <a className="orange">Read more</a>
//             </Link>
//           </div>
//           <div className="d-flex p-3 align-items-center">
//             <img src="/avatar.svg" alt="avatar" height={20} />
//             <p className="ml-2 mb-0">{post.author}</p>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// });

// export const Article = ArticleComponent;
// import skeleton from "public/assets/images/skeleton.png";
import { Box, Card, createStyles, Group, Text } from '@mantine/core';
import classnames from 'classnames';
import Image from 'next/image';
import technology from 'public/assets/images/technology.png';

const useStyles = createStyles(() => ({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '6.99864px',
    marginBottom: '2rem',
  },
}));

// interface UserCardImageProps {
//   image: string;
//   avatar: string;
//   name: string;
//   job: string;
//   stats: {
//     description: string;
//     label: string;
//     blogId: number;
//     content: string;
//   };
// }

export const UserCardImage = () => {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classnames(classes.card, '')}>
      <Box className=" relative mb-3 pb-52">
        <Image
          src={technology}
          alt={''}
          width="374"
          height="201"
          className="absolute h-full w-full rounded-md object-cover"
        />
      </Box>
      <Box className="mb-4 text-[#004E98]">
        On-going expansion of the stock exchange training centre at the tech
        zonal office, Oda road, Akure
      </Box>
      <Box className="text-[#FF6700]">Adamu Tosin | Nov 20</Box>

      <Group mt="md" position="center" spacing={30}>
        <div>
          <Text size="sm" color="dimmed" className={classnames('card_desc')}>
            On-going expansion of the stock exchange training centre at the tech
            zonal office, Oda road, Akure On-going expansion of the guuggj
            training centre...
          </Text>
        </div>
      </Group>
    </Card>
  );
};
