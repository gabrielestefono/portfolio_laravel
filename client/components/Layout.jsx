import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/header');
  }, []);

  return (
    <>
      <Header></Header>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}
