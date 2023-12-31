"use client";

import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ClipboardCopy } from "lucide-react";
import { Children, Fragment, useEffect, useState } from "react";
import { useCopyToClipboard } from "react-use";
import { twMerge } from "tailwind-merge";
import ClipboardButton from "./ClipboardButton";
import { MagicCard } from "../MagicCard/MagicCard";
import { cn } from "@/utils/tailwind.utils";

type ContactBoxItemType = React.ReactNode & { type: typeof ContactBox.Item };

interface ContactBoxProps {
  title: string;
  children: ContactBoxItemType[] | ContactBoxItemType;
  className?: string;
}

const ContactBox = ({ title, children, className }: ContactBoxProps) => {
  let [isOpen, setIsOpen] = useState(false);
  const [state, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (state.value) {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [state.value]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickCopy = (value: string) => {
    copyToClipboard(value);

    if (state.error) {
      setIsCopied(false);
      console.warn("Error copying to clipboard", state.error);
    }
  };

  return (
    <MagicCard
      isolated
      spotlightColor="rgba(47, 31, 25, 1)"
      borderColor="rgba(47, 31, 25, 1)"
      borderWidth={3}
      size={800}
      spotlight={false}
      className={cn(
        "p-6 sm:p-12 mr-12",
        "border border-caramel-500",
        "flex flex-col items-center justify-center",
        "cursor-pointer overflow-hidden shadow-2xl"
      )}
    >
      <div className="mix-blend-plus-lighter">
        <div>
          <div className="flex flex-row justify-between">
            <h3 className="text-base font-semibold leading-7 text-shark-50">
              {title}
            </h3>
            <button onClick={openModal}>
              <ClipboardCopy color="white" size={18} />
            </button>
          </div>
          <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-shark-300">
            <dl>{children}</dl>
          </address>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-80" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-shark-900 p-6 text-left align-middle shadow-xl transition-all border border-shark-50">
                    <Dialog.Title
                      as="h3"
                      className="clamp-text-2xl font-medium leading-6 text-shark-50"
                    >
                      <div>Copy to clipboard</div>
                    </Dialog.Title>
                    <div className="mt-6"></div>

                    {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(170,132,85,0.7),rgba(170,132,85,0.1))] opacity-25" />
    </MagicCard>
  );
};

ContactBox.Item = ({ title, description = "", hideTitle }: any) => {
  const descriptionText = description.includes("|br")
    ? description
        .split("|br")
        .map((item: string, i: number) => <p key={i}>{item}</p>)
    : description;

  return (
    <Fragment>
      <dt
        className={cn("z-[99999]", {
          "sr-only": hideTitle,
        })}
      >
        {title}
      </dt>
      <dd className="my-1">{descriptionText}</dd>
    </Fragment>
  );
};

export default ContactBox;
