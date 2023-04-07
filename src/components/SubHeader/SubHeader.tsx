import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function NavLink({ href, children }: any) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? 'font-bold text-pink-500' : 'text-gray-500'
      } block px-4 py-2 hover:text-red-500`}
    >
      {children}
    </Link>
  );
}
function SubHeader() {
  return (
    <div>
      <div className="flex">
        <div className="flex w-48 border-r">
          <NavLink href="/marketInsights/consumerGoods">Consumer goods</NavLink>
          <NavLink href="/marketInsights/energy">Energy</NavLink>
          <NavLink href="/marketInsights/technology">Technology</NavLink>
          <NavLink href="/marketInsights/financial-Services">
            Financial Services
          </NavLink>
          <NavLink href="/marketInsights/health-care">Health care</NavLink>
          <NavLink href="/marketInsights/podcast">Podcast</NavLink>
          <NavLink href="/marketInsights/industrial-services">
            Industrial services
          </NavLink>
          <NavLink href="/marketInsights/elecommunication">
            Telecommunication
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
