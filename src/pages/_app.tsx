import '@src/styles/globals.scss';
import '@src/styles/normalize.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://codeart.dev${router.route}`;
  return (
    <>
      <NextNProgress
        color="#BADA55"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} canonical={url} key={url} />
    </>
  );
}

export default MyApp;
