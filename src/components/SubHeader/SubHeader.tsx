import { Box } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const NavBarLinks = [
  { label: ' Consumer goods', href: '/marketInsights/consumerGoods' },
  { label: ' Energy', href: '/marketInsights/energy' },
  {
    label: ' Technology',
    href: '/marketInsights/technology',
  },
  {
    label: ' Financial Services ',
    href: '/marketInsights/financial-Services',
  },
  {
    label: 'Health care',
    href: '/marketInsights/health-care',
  },
  {
    label: 'Podcast',
    href: '/marketInsights/podcast',
  },
  {
    label: ' Industrial services',
    href: '/marketInsights/industrial-services',
  },
  {
    label: 'Telecommunication',
    href: '/marketInsights/telecommunication',
  },
];

function SubHeader() {
  const [activeRoute, setActiveRoute] = useState<string>('');
  const router = useRouter();
  const { category } = router.query;
  const firstPath = router.pathname.split('/')[1];
  const pathDelimiter = router.asPath.includes('/') ? '/' : '';
  const matchedPath = `${pathDelimiter}${firstPath}${pathDelimiter}${category}`;

  useEffect(() => {
    const pathmatch = NavBarLinks.some((route) =>
      matchedPath.includes(route.href)
    );
    setActiveRoute(pathmatch ? matchedPath : '');
  }, [matchedPath]);
  return (
    <div>
      <div className="flex">
        <div className="flex w-48 border-r">
          {NavBarLinks.map((item, index) => {
            return (
              <Box
                key={index}
                sx={() => ({
                  color: activeRoute === item.href ? '#980059' : ' #666666',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  padding: '2rem',
                })}
                component={Link}
                href={item.href}
              >
                {item.label}
              </Box>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
