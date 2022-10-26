import Verified from "./Verified"
import Avatar from "./Avatar"

const renderComments = (comment, i) => {
  return (
    <section key={i} className="flex space-x-4 mt-6 px-4">
      <div className="">
        <Avatar 
          alt="" 
          style="border border-green-500 w-9 h-9"
          imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      </div>
      <div className="flex-1">
        <header className="flex justify-between">
          <div className="flex space-x-2">
            <h3 className="font-12 text-secondaryColor-800">{comment.username}</h3>
            <Verified />
          </div>
        </header>
        <div className="mt-2 space-y-2">
          <p className="text-dark font-14 font-inter--regular">
            {comment.text}
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Comments({ comments }) {
  return (
    <div>
      {comments['BAPIPRjQce9'].map(renderComments)}
    </div>
  )
}