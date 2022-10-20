import Avatar from "@/components/Avatar";
import Link from "next/link";
import Layout from "@/components/layout";
import { 
  ChevronRightIcon, 
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  ShieldExclamationIcon,
  NewspaperIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";
import { getUserDetails } from "actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const LISTS = [
  {id: 0, title: "Security", icon: ShieldExclamationIcon},
  {id: 1, title: "About App", icon: QuestionMarkCircleIcon},
  {id: 2, title: "Terms & Conditions", icon: NewspaperIcon},
  {id: 3, title: "Report a problem", icon: ExclamationTriangleIcon},
]

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userDetails);

  useEffect(() => {
    dispatch(getUserDetails());
    console.log(user);
  }, [dispatch, user]);

  return (
    <>
      <header className="border-b-2">
        <div className="w-full border-b text-green-neutral-primary space-x-10 p-2 flex items-center text-body-semibold">
          <Avatar 
            style="w-8 h-8"
            imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile picture"
          />
          <h3 className="text-center">Choice9ja</h3>
        </div>

        <div className="py-6 px-2 flex space-x-10">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 ring-2 ring-offset-2 ring-blue-500">
            <span className="text-lg font-medium leading-none text-white">AB</span>
          </span>
          <span>
            <span className="block text text-body-semibold text-coolblack-primary">Ahmed Bbash</span>
            <Link className="text-green-neutral-700" href="/profile/view" passHref>
              View your profile
            </Link>
          </span>
        </div>
      </header>
      <Layout>
        <main className="py-10">
          <ul className="divide-y space-y-3 divide-green-neutral-200">
            {LISTS.map((list) => (
              <li key={list.id} className="flex items-center pt-3 justify-between">
                <div className="flex items-center space-x-3">
                  <list.icon className="text-green-neutral-500 h-5 w-5" />
                  <span className="text-coolblack-900 font-bold text-lg">{list.title}</span>
                </div>
                <ChevronRightIcon className="w-6 h-6 text-green-neutral-500" />
              </li>
            ))}
        </ul>

        <button className="flex items-center space-x-6 mt-10 text-green-neutral-500">
          <ArrowRightOnRectangleIcon className="w-6 h-6"/>
          <span className="text-body-2-regular">Log Out</span>
        </button>
        </main>
      </Layout>
    </>
  )
}