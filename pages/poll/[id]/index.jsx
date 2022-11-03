import BackButton from "@/components/BackButton";
import Verified from "@/components/Verified";
import Avatar from "@/components/Avatar";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ICONS } from "@/reusable/Icons";
import { numberFormatter } from "@/helpers/index";
import { useRouter } from "next/router";

import { getPostById } from "actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "@/components/Post";

export default function Poll() {
  const { query } = useRouter();

  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostById(+query.id))
    console.log(post)
  }, [dispatch]);

  return (
    <>
      <header className="border-b py-3 px-4 border-b-coolblack-200">
        <BackButton title="Poll"/>
      </header>
      <main className="border-b pb-4 mb-28">
        {loading ? <p className="text-center mt-2">Loading...</p> : (
          // <Post post={post}/>
          <p>Poll</p>
        )}
      </main>
    </>
  )
}