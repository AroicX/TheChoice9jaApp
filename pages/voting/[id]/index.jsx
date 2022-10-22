import { useRouter } from "next/router"
import BackButton from "@/components/BackButton";
import Layout from "@/components/layout";
import SVG from "react-inlinesvg";
import Avatar from "@/components/Avatar";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Vote() {
  const [open, setOpen] = useState(false);
  const { query, push } = useRouter();
  return (
    <>
      <header className="px-2 py-3">
        <BackButton title={`${query.id} Election`}/>
      </header>
      <Layout>
        <div className="mb-6">
          <img className="w-full" src="/map.png" alt="Map"/>
        </div>

          <div className="mb-10 flex items-center justify-between">
            <h3 className="text-black-light font-12 font-inter--md">Candidates</h3>
            <div className="relative inline-block">
              <div className="flex items-center text-black-light font-12 font-inter--md px-5 py-2 rounded-md">
                <button
                  type="button"
                  class="group inline-flex justify-center text-sm font-medium hover:text-gray-900"
                  id="menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Showing by:
                </button>
                <select className="py-1 border-0 bg-transparent focus:border-0 outline-none">
                  <option className="text-gray-500 px-4 py-2 text-sm">Most Votes</option>
                </select>
              </div>
            </div>
          </div>

          <ul>
            <li className="bg-white">
              <div className="flex flex-shrink-0 items-center justify-between space-x-6">
                <div className="relative bg-green-100 flex justify-center items-center rounded-full">
                  <Avatar 
                    style="w-16 h-16"
                    imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  />
                  <SVG className="absolute w-5 h-5 top-0 left-12" src="/parties.svg"/>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-center truncate">
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-black-light font-12 font-inter--md">LP</h3>
                      </div>
                      <p className="space-x-2 text-black-primary truncate font-14 font-inter--sm">
                        Peter Obi
                      </p>
                    </div>
                    <SVG src="/caret.svg"/>
                  </div>

                  <div className="flex justify-between items-center truncate">
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate uppercase text-black-light font-12 font-inter--md">Votes</h3>
                      </div>
                      <p className="space-x-2 text-black text-lg truncate text-md">
                        <span className="text-green-primary font-14 font-inter--md">2500</span>
                        <span className="text-black-light font-14 font-inter--md">(47.01%)</span>
                      </p>
                    </div>
                      <button
                      onClick={() => setOpen(true)}
                      type="button"
                      className="inline-flex space-x-2 items-center rounded-md border border-transparent bg-green-600 px-4 py-2 font-12 font-inter--sm text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      <SVG className="w-6 h-6" src="/svgs/user.svg" />
                      <span>Vote Now</span>
                    </button>
                  </div>

                </div>
              </div>
            </li>
          </ul>
      </Layout>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-12 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto text-coolblack-700 font-semibold text-xl flex items-center justify-center">
                      <h2>Congratulations</h2>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <div className="mt-2">
                        <span className="text-coolblack-700">You have casted your vote for</span>
                        <div className="text-sm text-gray-500">
                          <p className="text-coolblack-primary font-bold text-lg my-4">Peter Obi</p>
                          <div className="flex space-x-2 justify-center">
                            <SVG src="/parties.svg" className="w-8 h-8" />
                            <span>Labour Party (LP)</span>
                          </div>

                          <div className="mx-auto my-10 w-fit relative">
                            <Avatar
                              style="w-[120px] h-[120px]" 
                              imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            />
                            <div className="absolute left-20 bottom-2 bg-green-600 p-2 w-fit rounded-full flex justify-center items-center">
                              <SVG src="/check.svg" className="text-white w-5 h-5"/>
                            </div>
                          </div>

                          <div className="flex justify-center text-coolblack-500 w-60">
                           <p className="font-16">
                              as presidential candidate of Federal
                              Republic of Nigeria.
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => push('/home')}
                    >
                      Return home
                    </button>
                  </div>
                  <div className="mt-5 sm:mt-6 text-center">
                    <Link passHref href="/results">
                      <a href="/results" className="font-bold text-green-600">View Results</a>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
    </Transition.Root>
    </>
  )
}