import BackButton from "@/components/BackButton";
import PollComponent from "@/components/Poll";
import Button from "@/reusable/Button";
import { useState } from "react";
import Feed from "@/components/Feed";

export default function Poll() {
  const [comment, setComment] = useState("");

  return (
    <>
      <header className="border-b py-3 px-4 border-b-coolblack-200">
        <BackButton title="Poll"/>
      </header>
      <main className="border-b pb-4 mb-28">
        <PollComponent />
        <Feed />
      </main>
      <foorer className="fixed bottom-0 left-0 max-h-fit border-t bg-white px-4 border-t-coolblack-200 py-3 w-full">
        <div className="flex items-start h-fit space-x-4">
          <div className="min-w-0 flex-1">
            <form action="#">
              <div className="focus-within:border-indigo-600">
                <label htmlFor="comment" className="sr-only">
                  Add your comment
                </label>
                <textarea
                  rows={1}
                  name="comment"
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="block w-full resize-none border-0 border-b border-green-200 p-0 pb-2 focus:border-green-600 focus:ring-0 sm:text-sm"
                  placeholder="Add your comment..."
                  defaultValue={''}
                />
              </div>
              <div className="flex justify-end pt-2">
                <div className="flex-shrink-0">
                  <Button 
                    text="Post"
                    type="submit"
                    styles={`${!comment ? 'bg-coolblack-200 font-bold cursor-not-allowed' : 'bg-green-600'} inline-flex items-center rounded-full border border-transparent font-bold px-6 py-2 text-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </foorer>
    </>
  )
}