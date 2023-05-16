import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { NavigationItemVariants } from "./navigationVariants.motion";

const NavigationItem = ({ className, i, path, label, onClick }: any) => {
  return (
    <li className={className}>
      <div className="py-4 clamp-text-3xl" onClick={onClick ?? null}>
        <Link href={path} className="inline-block font-bold ">
          {/* <span className="font-light">{`0${i}`}</span>  */}
          {label}
        </Link>
      </div>
    </li>
  );
};

export default NavigationItem;
