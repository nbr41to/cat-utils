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
  const isDev = true; // TODO: APIつなぎ込み時に差し替え
  // const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';
  const [mswPrepared, setMswPrepared] = useState(!isDev);

  useEffect(() => {
    if (isDev && !mswPrepared) {
      (async () => {
        await mswSetUp();
        setMswPrepared(true);
      })();
    }
  }, []);

  if (!mswPrepared) return <LoadingOverlay visible={true} />;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
