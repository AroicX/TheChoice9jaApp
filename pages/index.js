import { LOGIN_ACCOUNT } from '@/services/authentication';

export default function Home() {
  const login = async () => {
    const data = {};

    const callback = (respose) => {
      console.log(respose);
    };
    const onError = (respose) => {
      console.log(respose);
    };

    await LOGIN_ACCOUNT(data, callback, onError);
  };
  return (
    <div className='flex bg-app-color'>
      <p>Hello</p>
      <button onClick={login}>Login</button>
    </div>
  );
}
