import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@/components/Avatar";
import Layout from "@/components/layout";
import Loader from "@/reusable/Loader";
import Discourse from "@/components/Discourse";

import { getDiscussions } from "actions";

export default function Discussion() {
  const dispatch = useDispatch();
  const {discussions} = useSelector(state => state.discussions);
  const router = useRouter();

  useEffect(() => {
    dispatch(getDiscussions());
  }, [dispatch]);

  return (
    <>
    <header className="flex items-center px-2 py-2 border-b border-darkColor-200 pb-2">
      <Avatar 
        alt="Bash picture" 
        style="w-9 h-9"
        imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <div className="flex-1 text-center">
        <h3 className="text-greenPrimary font-14 font-inter--bold">Choice9ja</h3>
      </div>
    </header>
    <Layout>
      <main className="mt-6 border-b-4 pb-6">
        <h4 className="text-dark font-16 font-inter--sm mb-3">Discourse Forums</h4>
        <ul className="divide-y space-y-3 divide-primaryColor-300">
          {discussions ? (
            <>
              {discussions.discussions.map(({id, topic}) => (
                <li onClick={() => router.push(`discourse/${id}`)} key={id} className="flex items-center pt-3 justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-md bg-primaryColor-500 h-8 w-8" />
                    <span className="text-dark text-ellipsis overflow-hidden font-14 font-inter--sm">{topic}</span>
                  </div>
                  <ChevronRightIcon className="w-6 h-6 text-darkColor-300" />
                </li>
              ))}
            </>
          ) : <Loader />}
        </ul>
      </main>
      <Discourse poll="restructuring nigeria"/>
    </Layout>
    </>
  )
}