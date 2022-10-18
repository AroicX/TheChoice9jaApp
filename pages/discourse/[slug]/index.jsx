import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getDiscussion } from "actions";
import BackButton from "@/components/BackButton";
import Avatar from "@/components/Avatar";
import Button from "@/reusable/Button";
import Tabs from "@/components/Tabs";
import Layout from "@/components/layout";
import CreatePost from "@/components/CreatePost";

export default function Slug() {
  const dispatch = useDispatch();
  const { discussion } = useSelector(state => state.discussion);
  const {query: {slug}} = useRouter();

  useEffect(() => {
    dispatch(getDiscussion(slug));
  }, [dispatch]);

  return (
    <>
      <CreatePost />
      <header className="py-2 px-3 mb-1">
        <BackButton title="In Nigeria"/>
      </header>
      <section className="bg-red-400 py-2">
        <div className="px-2">
          <div className="flex justify-between items-center">
            <Avatar style="bg-white" />
            <Button type="button" text="Join +" styles="border-2 text-white font-bold border-white w-fit px-12 rounded-full"/>
          </div>
          <div className="text-white space-y-2 my-2">
            <h3 className="text-2xl font-bold">Insecurity in Nigeria</h3>
            <p>This forum is used to discourse {discussion ? discussion.discussion.description : ""}</p>
          </div>
        </div>
        <div className="bg-red-500 text-white p-2">
          <p>7000 Followers</p>
        </div>
      </section>
      <Layout>
        <main>
          <Tabs />
        </main>
      </Layout>
    </>
  )
}