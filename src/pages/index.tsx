// import { useRouter } from 'next/router';

import { AppShell } from '@/components/AppLayout';
import { Meta } from '@/Seo/Meta';

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
      Im the body content
    </AppShell>
  );
};

export default Home;
