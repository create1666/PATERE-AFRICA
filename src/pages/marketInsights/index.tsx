import { Box } from '@mantine/core';
import Image from 'next/image';
import MarketInsightImage from 'public/assets/images/MarketInsightImage.png';

import { HeaderNav } from '@/components/Header/Header';
import SubHeader from '@/components/SubHeader/SubHeader';

const MarketInsightsLayout = () => {
  return (
    <div className="">
      <HeaderNav onClick={() => ''} />
      <SubHeader />

      <Box className="flex">
        <Box>
          <Image src={MarketInsightImage} alt={'Patere footer Logo'} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ipsa,
          officiis tempora quod, cupiditate iste modi et id quaerat atque ipsum
          fuga maxime saepe asperiores dolore esse? Maxime, voluptatem at?
        </Box>
        <Box>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ipsa,
          officiis tempora quod, cupiditate iste modi et id quaerat atque ipsum
          fuga maxime saepe asperiores dolore esse? Maxime, voluptatem at?
        </Box>
      </Box>
    </div>
  );
};

export default MarketInsightsLayout;
