import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getDiscussion, getPostsByDiscussion } from "actions";
import { JOIN_ROOM, GET_ROOMS_BY_USER } from "@/services/room";
import BackButton from "@/components/BackButton";
import Avatar from "@/components/Avatar";
import Button from "@/reusable/Button";
import Tabs from "@/components/Tabs";
import Layout from "@/components/layout";
import CreatePost from "@/components/CreatePost";
import { ResponseHandler } from "@/helpers/index";

export default function Slug() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [joined, setJoined] = useState(false);
  const dispatch = useDispatch();

  const { discussion } = useSelector(state => state.discussion);

  const {query: {slug}} = useRouter();

  useEffect(() => {
    const {user} = JSON.parse(localStorage.getItem("user-data"));
    setUser(user);
  }, []);

  useEffect(() => {
    dispatch(getDiscussion(slug));
  }, [dispatch]);


  useEffect(() => {
    getRoomsByUser();
  }, []);


  const onSubmitHandler = () => {
    setIsLoading(true);

    const data = {
      userId: user.id,
      discussionsId: slug 
    }

    const callback = (response) => {
      if (response) {
        setIsLoading(false);
        setJoined(true);
        ResponseHandler(response);
      }
    };

    const onError = (err) => {
      setIsLoading(false);
      ResponseHandler(err);
    };

    JOIN_ROOM(data, callback, onError);
  }

  const getRoomsByUser = () => {
    const callback = (response) => {
      if (response) {
        response.room.map((room) => {
          if (room.discussionsId === +slug) {
            setJoined(true);
          }
        })
      }
    };

    const onError = (err) => {
      ResponseHandler(err);
    };

    GET_ROOMS_BY_USER(callback, onError);
  }

  return (
    <>
      <CreatePost />
      <header className="py-2 px-3 mb-1">
        <BackButton title="In Nigeria"/>
      </header>
      <section className="bg-red-400 pt-2">
        <div className="px-2">
          <div className="flex justify-between items-center">
            <Avatar style="bg-white" />
            <Button 
              click={onSubmitHandler} 
              loading={isLoading} 
              type="button"
              disabled={isLoading || joined} 
              text={`${joined ? 'Joined' : 'Join +'}`}
              styles={`${joined && 'bg-darkColor-300 cursor-not-allowed text-black border-0'} border-2 text-white font-bold border-white w-fit px-12 rounded-full`}
            />
          </div>
          <div className="text-white space-y-2 my-2">
            <h3 className="font-20 font-inter--sm">Insecurity in Nigeria</h3>
            <p className="font-12 font-inter--regular">This forum is used to discourse {discussion ? discussion.discussion.description : ""}</p>
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