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

import { Avatar, Button, Card, createStyles, Group, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

export function UserCardImage({
  image,
  avatar,
  name,
  job,
  stats,
}: UserCardImageProps) {
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
      <Avatar
        src={avatar}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        Follow
      </Button>
    </Card>
  );
}
