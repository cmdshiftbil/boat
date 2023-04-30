import { twMerge } from "tailwind-merge";
import MotionLine from "../MotionLine/MotionLine";

const BoxLines = ({ controls, className, inView }: any) => {
  return (
    <div className={twMerge("relative  h-full width-full", className)}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row justify-between  z-10">
          <svg
            className="-mt-[0.15rem] -ml-[0.15rem]"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3.5" fill="#101314" stroke="#DFEDF2" />
          </svg>
          <svg
            className="-mt-[0.15rem] -mr-[0.15rem]"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3.5" fill="#101314" stroke="#DFEDF2" />
          </svg>
        </div>

        <div className="flex flex-row justify-between  z-10">
          <svg
            className="-mb-[0.15rem] -ml-[0.15rem]"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3.5" fill="#101314" stroke="#DFEDF2" />
          </svg>
          <svg
            className="-mb-1 -mr-1"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3.5" fill="#101314" stroke="#DFEDF2" />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 left-0 flex flex-col justify-between h-full w-full">
        <MotionLine inView={inView} />
        <MotionLine inView={inView} />
      </div>

      <div className="absolute top-0 left-0 flex flex-row justify-between h-full w-full">
        <MotionLine inView={inView} direction="vertical" />
        <MotionLine inView={inView} direction="vertical" />
      </div>
    </div>
  );
};
export default BoxLines;
