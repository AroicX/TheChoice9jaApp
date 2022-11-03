import Avatar from "./Avatar";
import Verified from "./Verified";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

import { ICONS } from "@/reusable/Icons";
import AvatarName from "./NameAvatar";

function Post({post}) {
  if (!post) {
    return <p className="text-center">No Posts</p>
  }
  return (
    <section className="px-4">
      <div className="flex space-x-4 mt-6">
        <div className="">
          <AvatarName name={post.user.username.charAt(0)}/>
        </div>
        <div className="flex-1">
          <header className="flex justify-between items-center">
            <div className="flex space-x-2">
              <h3 className="text-coolblack-primary font-12 font-inter--sm">{post.user.username}</h3>
              <Verified />
            </div>
            <EllipsisHorizontalIcon onClick={() => setModal(true)} className="h-7 w-7"/>
          </header>
          <div className="mt-2 space-y-2">
            <header onClick={() => router.push("/poll")}>
              <p className="text-coolblack-900 font-14 font-inter--regular"> 
                {post.message}
              </p>
            </header>
            {/* <div className="text-primaryColor-600 font-12 font-inter--md flex space-x-3 items-center">
              <span>42,000 Votes</span>
              <span className="font-bold text-lg">.</span>
              <span>8 days left</span>
            </div> */}
          </div>
        </div>
      </div>
      <section className="flex justify-between items-center text-sm border-y py-2">
        <div className="thumbs flex space-x-4">
          <span className="flex items-center space-x-2">
            <span className="bg-blueSecondary p-0.5 rounded-full">
              <Likes />
            </span>
            <span>{post.likes}</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="">
              <DisLikes />
            </span>
            <span>{post.dislikes}</span>
          </span>
        </div>
        {/* <div className="space-x-1">
          <span>{post.posts?._count.comments ? post.posts?._count.comments : ""}</span>
          <span className="text-sm">comments</span>
        </div> */}
      </section>
      <footer className="mt-2 flex items-center justify-between space-x-4">
        {
        ICONS.map((item) => (
          <div key={item.name} className="flex items-center space-x-3 text-darkColor-500">
            <item.icon className="w-6" aria-hidden="true" />
            <span className="text-sm">{item.title}</span>
          </div>
        ))}
      </footer>
    </section>
  );
}

export default Post;


function Likes(props) {
  return (
    <svg
        fill='white'
        {...props}
        className="w-4 h-4"
        stroke='bluePrimary'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
        ></path>
    </svg>
  )
}

function DisLikes(props) {
  return (
    <svg
      {...props}
      fill='none'
      className="w-5 h-5"
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke='round'
        strokeLinecap='round'
        strokeWidth='2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5'
      ></path>
    </svg>
  )
}