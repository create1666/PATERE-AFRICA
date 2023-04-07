import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { HeaderNav } from '@/components/Header/Header';
import SubHeader from '@/components/SubHeader/SubHeader';

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
const MarketInsightsLayout = () => {
  const [matchedPath, setMatchRoute] = useState<string | undefined>(
    'marketInsights'
  );
  const router = useRouter();

  useEffect(() => {
    const pathmatch = NavBarLinks.map((route) => route.href.split('/')[1]).find(
      (path) => path === router.pathname.split('/')[1]
    );
    setMatchRoute(pathmatch);
  }, [router.pathname]);

  console.log('MTCHROUT,', matchedPath);
  return (
    <div className="">
      <HeaderNav onClick={() => ''} />
      <SubHeader />

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ipsa,
        officiis tempora quod, cupiditate iste modi et id quaerat atque ipsum
        fuga maxime saepe asperiores dolore esse? Maxime, voluptatem at?
      </div>
    </div>
  );
};

export default MarketInsightsLayout;
