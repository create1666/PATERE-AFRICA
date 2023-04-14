import { Box } from '@mantine/core';

import { HeaderNav } from '@/components/Header/Header';
import { MarketInsightImage } from '@/components/Reusables/SVGs/Svg';
import SubHeader from '@/components/SubHeader/SubHeader';

const MarketInsightsLayout = () => {
  return (
    <div className="">
      <HeaderNav onClick={() => ''} />
      <SubHeader />

      <Box className="flex">
        <Box>
          <MarketInsightImage />
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
