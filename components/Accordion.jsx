import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Accordion({ faqs }) {
  return (
    <>
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="py-4 px-2 bg-white rounded-lg border border-green-700">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                  <span className="text-green-700 font-bold">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDownIcon
                      className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 divide-y-2 divide-y-coolblack-500">
                {faq.answers.map((answer) => (
                  <p key={answer.name} className="text-base flex py-2 text-green-neutral-800">
                    <span className="text-lg font-semibold flex-1">{answer.name}</span>
                    <span className="flex-1">{answer.value}</span>
                  </p>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
}
