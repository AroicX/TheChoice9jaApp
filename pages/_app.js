import '../styles/app.scss';
import 'sweetalert2/src/sweetalert2.scss';
import { GlobalStoreProvider } from '@/hooks/useGlobalStore';
import { useStore } from 'store';
import { Provider } from 'react-redux';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <div id='app'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Choice9ja Goal is to provide a platform for Nigerian citizens, that’s aimed to increase transparency, strengthened participatory  governance and ensuring accountability of our leaders, wherein its online community can raise issues, and rate politicians according to their actions. '
        />
        <title>The Choice 9ja</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Provider store={store}>
        <GlobalStoreProvider>
          <Component {...pageProps} />
        </GlobalStoreProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
