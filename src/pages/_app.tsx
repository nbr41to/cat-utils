import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Layout } from '@/components/layout/Layout';
import { LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';

const mswSetUp = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('@/__mocks__/msw/worker');
    server.listen();
  } else {
    const { worker } = await import('@/__mocks__/msw/worker');
    worker.start();
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const isDev = process.env.VERCEL_ENV !== 'production';
  const [mswPrepared, setMswPrepared] = useState(!isDev);

  useEffect(() => {
    if (isDev) {
      (async () => {
        await mswSetUp();
        setMswPrepared(true);
      })();
    }
  }, []);

  if (!mswPrepared) return <LoadingOverlay visible={true} />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
