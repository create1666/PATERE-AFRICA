/* eslint-disable react/jsx-no-undef */
import { Box, Button, Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ButtonShell } from '../Button/Button';
import { PatereLogo } from '../Reusables/SVGs/Svg';

const NavBarLinks = [
  { label: ' Home', href: '/home' },
  { label: ' About Us', href: '/about' },
  {
    label: ' Shrefck Screener',
    href: '/Shrefckscreener',
  },
  {
    label: ' Pricing ',
    href: '/Pricing',
  },
  {
    label: 'Market Insights',
    href: '/marketInsights',
  },
];

interface HeaderProps {
  onClick: () => void;
  wailist?: boolean;
}

export const HeaderNav: React.FC<HeaderProps> = ({ wailist, onClick }) => {
  const [activeRoute, setActiveRoute] = useState('');
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < NavBarLinks.length; i++) {
      /** @ts-ignore */
      if (NavBarLinks[i].href.includes(router.pathname)) {
        /** @ts-ignore */
        setActiveRoute(NavBarLinks[i].href);
      }
    }
  }, []);

  return (
    <>
      {!wailist ? (
        <Box>
          <Box
            className="w-full  "
            sx={() => ({
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            })}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PatereLogo />
              <Text sx={{ color: '#004E98', padding: '0.19rem' }}>
                PATERE AFRICA
              </Text>
            </Box>
            <Box>
              {NavBarLinks.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={() => ({
                      color:
                        router.pathname === item?.href ||
                        activeRoute === item?.href
                          ? '#004E98'
                          : ' #666666',
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
            </Box>

            <Box>
              <ButtonShell className="mr-[1rem] bg-[#004E98]" onClick={onClick}>
                Join our waitlist
              </ButtonShell>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            className="w-full"
            sx={() => ({
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            })}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PatereLogo />
              <Text sx={{ color: '#004E98', padding: '0.19rem' }}>
                PATERE AFRICA
              </Text>
            </Box>
            <Box>
              {NavBarLinks.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={() => ({
                      color:
                        router.pathname === item?.href ||
                        activeRoute === item?.href
                          ? '#004E98'
                          : ' #666666',
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
            </Box>

            <Box>
              <Button
                sx={{
                  marginRight: '1rem',
                  background: '#004E98',
                }}
              >
                Join our waitlist
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
