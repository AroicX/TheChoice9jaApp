import { useRouter } from 'next/router';
//
export default function useGuest(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const Router = useRouter();
      const accessToken = localStorage.getItem('user-data');

      if (accessToken) {
        Router.back();
      }
    }
    return <Component {...props} />;
  };
}
