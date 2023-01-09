import { Box, Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const data = [
  { label: ' Home', to: '/' },
  { label: ' About Us', to: '/about' },
  {
    label: ' Stock Screener',

    to: '/Stockscreener/',
  },
  {
    label: ' Pricing ',

    to: '/Pricing/',
  },
  {
    label: 'Market Insights',

    to: '/MarketInsights/',
  },
];

export const HeaderNav = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  return (
    <Box
      sx={() => ({
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      })}
    >
      <div>Patere Africa</div>
      <div>
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={() => ({
                color: router.pathname === item.to ? '#004E98' : ' #A3A3A3',
                cursor: 'pointer',
                textDecoration: 'none',
              })}
              component={Link}
              href={item.to}
              onClick={() => setActive(active + 1)}
            >
              {item.label}
            </Box>
          );
        })}
      </div>

      <Box>
        <Button
          sx={{
            marginLeft: '1rem',
            background: '#004E98',
          }}
        >
          Sign up for a free plan
        </Button>
        <Button variant="outline">Login</Button>
      </Box>
    </Box>
  );
};
