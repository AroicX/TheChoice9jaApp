import Avatar from "./Avatar";
import Verified from "./Verified";
import { ICONS } from "./Poll";
import { numberFormatter } from "../helpers";
import Button from "@/reusable/Button";

export default function Feed() {
  return (
    <section className="flex space-x-4 mt-6 px-4">
      <div className="">
        <Avatar />
      </div>
      <div className="flex-1">
        <header className="flex justify-between">
          <div className="flex space-x-2">
            <h3 className="font-bold text-coolblack-900">Ahmed Bash</h3>
            <Verified />
          </div>
        </header>
        <div className="mt-2 space-y-2">
          <p className="text-coolblack-600 font-bold text-lg">From this options, who do you think is the 
            the best fit for Minister of Petroleum?
          </p>
          <div className="flex items-center space-x-4">
            {ICONS
              .filter((icon) => icon.name === "thumbs-up" || icon.name === "thumbs-down")
              .map((item) => (
                <div key={item.name} className="flex items-center space-x-3 text-coolblack-200">
                  <item.icon className="w-8" aria-hidden="true" />
                  <span className="text-lg">{item.count !== 0 && numberFormatter(item.count)}</span>
                </div>
              ))
            }
            <div className="font-bold text-lg text-coolblack-300">Reply</div>
          </div>
        </div>
      </div>
    </section>
  )
}