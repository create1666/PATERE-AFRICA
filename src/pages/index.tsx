// import { useRouter } from 'next/router';

import { AppShell } from '@/components/AppLayout';
import { Hero } from '@/components/HeroSection/Hero';
import { Meta } from '@/Seo/Meta';

const popularStock = [
  'Sothema',
  'FBN Holdings',
  'Misr Fertilizers',
  'LabelVie',
];

const Home = () => {
  return (
    <AppShell
      meta={
        <Meta
          title="PATERE AFRICA"
          description="Patere creates an investor environment that attract and retain capitaln by telling the stories of Africa’s publicly listed companies from an investor’s angle."
        />
      }
    >
      <Hero popularStock={popularStock} />
    </AppShell>
  );
};

export default Home;
