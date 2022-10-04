import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import SVG from "react-inlinesvg";
import { useRouter } from 'next/router';

export default function Dropdown() {
  const router = useRouter();

  return (
      <Menu as="div" className="relative inline-block text-left z-50">
        <div>
          <Menu.Button className="inline-flex w-full justify-center">
            <SVG src="/svgs/dots-horizontal.svg" className="w-6 text-green-neutral-600"/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button onClick={() => router.push("/analytics")} className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <Result
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className='text-md text-coolblack-300'>Expand poll results</span>
                </button>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button onClick={() => router.push("/reports")} className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <Report
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className='text-red-400 text-md'>Reports</span>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}

function Result(props) {
  return (
    <svg {...props} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1 12.5C0.733333 12.5 0.5 12.4 0.3 12.2C0.1 12 0 11.7667 0 11.5V1.5C0 1.23333 0.1 1 0.3 0.8C0.5 0.6 0.733333 0.5 1 0.5H11C11.2667 0.5 11.5 0.6 11.7 0.8C11.9 1 12 1.23333 12 1.5V11.5C12 11.7667 11.9 12 11.7 12.2C11.5 12.4 11.2667 12.5 11 12.5H1ZM1 11.5H11V1.5H1V11.5ZM3.23333 9.88333C3.37778 9.88333 3.49722 9.83611 3.59167 9.74167C3.68611 9.64722 3.73333 9.52778 3.73333 9.38333V6.96667C3.73333 6.82222 3.68611 6.70278 3.59167 6.60833C3.49722 6.51389 3.37778 6.46667 3.23333 6.46667C3.08889 6.46667 2.96944 6.51389 2.875 6.60833C2.78056 6.70278 2.73333 6.82222 2.73333 6.96667V9.38333C2.73333 9.52778 2.78056 9.64722 2.875 9.74167C2.96944 9.83611 3.08889 9.88333 3.23333 9.88333ZM8.76667 9.88333C8.91111 9.88333 9.03056 9.83611 9.125 9.74167C9.21944 9.64722 9.26667 9.52778 9.26667 9.38333V3.38333C9.26667 3.23889 9.21944 3.11944 9.125 3.025C9.03056 2.93056 8.91111 2.88333 8.76667 2.88333C8.62222 2.88333 8.50278 2.93056 8.40833 3.025C8.31389 3.11944 8.26667 3.23889 8.26667 3.38333V9.38333C8.26667 9.52778 8.31389 9.64722 8.40833 9.74167C8.50278 9.83611 8.62222 9.88333 8.76667 9.88333ZM6 9.88333C6.14444 9.88333 6.26389 9.83611 6.35833 9.74167C6.45278 9.64722 6.5 9.52778 6.5 9.38333V8.41667C6.5 8.27222 6.45278 8.15278 6.35833 8.05833C6.26389 7.96389 6.14444 7.91667 6 7.91667C5.85556 7.91667 5.73611 7.96389 5.64167 8.05833C5.54722 8.15278 5.5 8.27222 5.5 8.41667V9.38333C5.5 9.52778 5.54722 9.64722 5.64167 9.74167C5.73611 9.83611 5.85556 9.88333 6 9.88333ZM6.01667 6.46667C6.15 6.46667 6.26389 6.41944 6.35833 6.325C6.45278 6.23056 6.5 6.11111 6.5 5.96667V5.95C6.5 5.81667 6.45 5.70278 6.35 5.60833C6.25 5.51389 6.13333 5.46667 6 5.46667C5.85556 5.46667 5.73611 5.51389 5.64167 5.60833C5.54722 5.70278 5.5 5.82222 5.5 5.96667V5.98333C5.5 6.11667 5.55 6.23056 5.65 6.325C5.75 6.41944 5.87222 6.46667 6.01667 6.46667ZM1 11.5V1.5V11.5Z" 
        fill="#94ABAB"/>
    </svg>
  )
}

function Report(props) {
  return (
    <svg {...props} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M0.833496 11.5003C0.689052 11.5003 0.569607 11.4531 0.475163 11.3587C0.380718 11.2642 0.333496 11.1448 0.333496 11.0003V0.666992C0.333496 0.522548 0.380718 0.403103 0.475163 0.308659C0.569607 0.214214 0.689052 0.166992 0.833496 0.166992H5.65016C5.77239 0.166992 5.87794 0.203103 5.96683 0.275325C6.05572 0.347548 6.11127 0.44477 6.1335 0.566992L6.36683 1.60033H9.8335C9.97794 1.60033 10.0974 1.64755 10.1918 1.74199C10.2863 1.83644 10.3335 1.95588 10.3335 2.10033V7.26699C10.3335 7.41144 10.2863 7.53088 10.1918 7.62533C10.0974 7.71977 9.97794 7.76699 9.8335 7.76699H6.46683C6.35572 7.76699 6.25294 7.73366 6.1585 7.66699C6.06405 7.60033 6.00572 7.50588 5.9835 7.38366L5.75016 6.35033H1.3335V11.0003C1.3335 11.1448 1.28627 11.2642 1.19183 11.3587C1.09738 11.4531 0.977941 11.5003 0.833496 11.5003ZM6.91683 6.76699H9.3335V2.60033H5.51683L5.20016 1.16699H1.3335V5.35033H6.60016L6.91683 6.76699Z" f
      fill="#94ABAB"
    />
    </svg>
  )
}
