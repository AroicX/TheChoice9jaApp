import { useRouter } from 'next/router';
//
export default function useAuth(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const Router = useRouter();
      const accessToken = localStorage.getItem('user-data');

      if (!accessToken) {
        localStorage.setItem('be-authorized', window.location.pathname);
        Router.replace('/login');
        return null;
      }
    }
    return <Component {...props} />;
  };
}
