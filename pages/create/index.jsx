import BackButton from "@/components/BackButton"
import Avatar from "@/components/Avatar"
import { useState } from "react"
import Button from "@/reusable/Button";

export default function CreatePost() {
  const [post, setPost] = useState("");
  return (
    <>
      <header className="py-2 px-3 border">
        <BackButton title="Create Post"/>
      </header>
      <div className="flex items-center px-3 mt-6 h-fit space-x-4">
        <Avatar 
          alt="" 
          style="border border-green-500 self-start"
          imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
          <form className="min-w-0 flex-1">
            <div className="focus-within:border-indigo-600">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={5}
                name="comment"
                id="comment"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                className="block w-full resize-none border px-2 py-1 border-green-200 p-0 pb-2 focus:border-green-600 focus:ring-0 sm:text-sm"
                placeholder="Add your comment..."
              />
            </div>
            <div className="flex justify-end">
              <Button text="Post" styles="mt-4 rounded-lg text-white font-bold text-xl w-44 bg-coolblack-300"/>
            </div>
          </form>
      </div>
    </>
  )
}