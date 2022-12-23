import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AuthProvider from '@/components/AuthProvider';

/** COMPONENTS **/
const BackButton = dynamic(() => import('@/components/BackButton'));
const Avatar = dynamic(() => import('@/components/Avatar'));
const Button = dynamic(() => import('@/reusable/Button'));
const Layout = dynamic(() => import('@/components/layout'));
const Modal = dynamic(() => import('@/reusable/Modal'));
const Poll = dynamic(() => import('@/components/Poll'));
const DiscourssionTabs = dynamic(() => import('@/components/discourse/Tabs'));

import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { PaperClipIcon, PlusIcon } from '@heroicons/react/24/outline';
import { contrastColor, randomColor } from '@/helpers/index';

/**  SERVICES **/
import { JOIN_ROOM, GET_ROOMS_BY_USER } from '@/services/room';
import { GET_DISCOUSSION_BY_ID } from '@/services/discussions';
import { GET_POLL_BY_DISCUSSION } from '@/services/polls';
import { CREATE_POST, GET_POST_BY_DISCOUSSION } from '@/services/discourse';

export default function Slug() {
  const [room, setRoom] = useState(null);
  const [discussions, setDiscussions] = useState([]);
  const [image, setImage] = useState();
  const [preview, setPreviw] = useState('');
  const fileInputRef = useRef();
  const [poll, setPoll] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [joined, setJoined] = useState(false);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState('');

  const [bgColor, setBgColor] = useState(randomColor() || '#000');

  const discussion = useSelector((state) => state.discussion);
  const {
    query: { slug },
  } = useRouter();

  useEffect(() => {
    if (slug) {
      getDiscussionById(slug);
      getPollByDiscussion(slug);
    }
  }, [slug]);

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem('user-data'));
    setUser(user);
  }, []);

  useEffect(() => {
    getRoomsByUser();
  }, []);

  const joinRoom = () => {
    setIsLoading(true);

    const data = {
      userId: user.id,
      discussionsId: slug,
    };

    const callback = (response) => {
      if (response) {
        setIsLoading(false);
        setJoined(true);

        toast.success(response.message);
      }
    };

    const onError = (error) => {
      setIsLoading(false);
      console.log(error);
      //toast.error(error)
    };

    JOIN_ROOM(data, callback, onError);
  };

  const getRoomsByUser = () => {
    const callback = (response) => {
      if (response) {
        response.room.map((room) => {
          if (room.discussionsId === +slug) {
            setJoined(true);
          }
        });
      }
    };

    const onError = (err) => {
      console.log(err);
    };

    GET_ROOMS_BY_USER(callback, onError);
  };

  const getDiscussionById = async (discussion_id) => {
    const callback = async (response) => {
      const { data } = response;
      setRoom(data);
      await getPostByDiscussion(slug);
    };

    const onError = (err) => {
      console.log(err);
    };

    await GET_DISCOUSSION_BY_ID(discussion_id, callback, onError);
  };

  const getPostByDiscussion = async (discussion_id) => {
    const callback = (response) => {
      const { data } = response;

      setDiscussions(data);
    };

    const onError = (err) => {
      console.log(err);
    };

    await GET_POST_BY_DISCOUSSION(discussion_id, callback, onError);
  };

  const getPollByDiscussion = async (discussion_id) => {
    const callback = (response) => {
      const { poll } = response;

      setPoll(poll);
    };

    const onError = (err) => {
      console.log(err);
    };

    await GET_POLL_BY_DISCUSSION(discussion_id, callback, onError);
  };

  const createPost = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const callback = (response) => {
      const { data } = response;

      const newDiscussions = [...discussions, data];

      setDiscussions(newDiscussions.reverse());

      setOpen(false);

      toast.success('you just posted something.');

      setIsLoading(false);
    };

    const onError = (err) => {
      console.log(err);
      setIsLoading(false);
    };

    const response = await uploadImageToCloudinary();

    const data = {
      discussionsId: slug,
      message: post,
      attachments: {
        image1: response.image,
      },
    };

    await CREATE_POST(data, callback, onError);
  };

  const uploadImageToCloudinary = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'choice9ja_uploads');
    formData.append('upload_preset', 'choice9ja_uploads');

    try {
      const data = await fetch(
        'https://api.cloudinary.com/v1_1/hafshus/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      ).then((r) => r.json());
      const body = { image: data.secure_url };

      return body;
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviw(reader.result);
      };

      reader.readAsDataURL(image);
    } else {
      setPreviw(null);
    }
  }, [image]);

  return (
    <AuthProvider>
      <Layout style='px-0'>
        {joined && (
          <button
            onClick={() => setOpen(true)}
            className='m_create--post'
            type='button'
          >
            <PlusIcon className='h-8 w-8' aria-hidden='true' />
          </button>
        )}
        <header className='py-2 px-3 mb-1'>
          <BackButton title={room?.topic} />
        </header>
        <section
          className={`pt-2`}
          style={{
            background: bgColor,
          }}
        >
          <div className='px-4'>
            <div className='flex justify-between items-center'>
              <Avatar style='bg-white' />
              <Button
                click={joinRoom}
                loading={isLoading}
                type='button'
                disabled={isLoading || joined}
                text={`${joined ? 'Joined' : 'Join +'}`}
                styles={`${
                  joined &&
                  'bg-darkColor-300 cursor-not-allowed text-black border-0'
                } border-2 text-white font-bold border-white w-fit px-12 rounded-full`}
              />
            </div>
            <div
              className=' space-y-2 my-2'
              style={{
                color: contrastColor(bgColor),
              }}
            >
              <h3 className='font-20 font-inter--sm'>{room?.topic}</h3>
              <p className='font-12 font-inter--regular'>
                {room?.question}
                {discussion ? discussion?.discussion.post : ''}
              </p>
            </div>
          </div>
          <div className='text-white py-2 px-4 border border-t'>
            {/* <p>
              {Math.floor(Math.random() * (1000 - 100) + 100)} People Joined
            </p> */}
          </div>
        </section>
        <DiscourssionTabs discussions={discussions} />

        {poll && <Poll poll={poll} />}
      </Layout>
      <Modal title='Post' toggle={open} dispatch={() => setOpen(false)}>
        <form onSubmit={createPost} className='relative px-2 pt-2'>
          <div className={`mb-2 ${preview ? 'block' : 'hidden'}`}>
            <img
              alt='This is a preview image'
              src={`${preview ? preview : null}`}
              className=' object-fit'
              width='150px'
              height='150px'
            />
          </div>
          <div className='overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-greenPrimary focus-within:ring-1 focus-within:ring-greenPrimary'>
            <label htmlFor='post' className='sr-only'>
              Post
            </label>
            <textarea
              rows={2}
              name='post'
              value={post}
              onChange={(e) => setPost(e.target.value)}
              id='post'
              className='block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm'
              placeholder='Write a post...'
            />

            {/* Spacer element to match the height of the toolbar */}
            <div aria-hidden='true'>
              <div className='py-2'>
                <div className='h-9' />
              </div>
              <div className='h-px' />
              <div className='py-2'>
                <div className='py-px'>
                  <div className='h-9' />
                </div>
              </div>
            </div>
          </div>

          <div className='absolute inset-x-px bottom-0 px-2'>
            <div className='flex items-center justify-between border-t border-gray-200 px-2 py-2 sm:px-3'>
              <div className='flex items-center'>
                <div className='group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400'>
                  <PaperClipIcon
                    className='-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                  <input
                    type='file'
                    ref={fileInputRef}
                    accept='image/*'
                    className='hidden absolute custom-file-input'
                    onChange={handleFileChange}
                  />
                  <button
                    type='button'
                    onClick={() => {
                      fileInputRef.current.click();
                    }}
                  >
                    Attach a file
                  </button>
                </div>
              </div>
              <div className='flex-shrink-0'>
                <Button
                  type='submit'
                  text='Create'
                  disabled={isLoading}
                  styles={`inline-flex items-center ${
                    isLoading
                      ? 'bg-darkColor-300 cursor-not-allowed'
                      : 'bg-greenPrimary'
                  } rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2`}
                />
              </div>
            </div>
          </div>
        </form>
      </Modal>
      <Toaster position='top-center' reverseOrder={false} />
    </AuthProvider>
  );
}
