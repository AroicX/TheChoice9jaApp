import '../styles/app.scss';
import 'sweetalert2/src/sweetalert2.scss';
import { GlobalStoreProvider } from '@/hooks/useGlobalStore';
import { useStore } from 'store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <div id='app'>
      <Provider store={store}>
        <GlobalStoreProvider>
          <Component {...pageProps} />
        </GlobalStoreProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
