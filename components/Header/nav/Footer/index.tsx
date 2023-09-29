import styles from "./style.module.scss";
import { translate } from "../../anim";
import { motion } from "framer-motion";
import { locations } from "@/content/locations.content";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <div className={cn("flex items-end flex-wrap text-xs", styles.footer)}>
      <ul className="w-1/2 mt-3 overflow-hidden list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex flex-col gap-4 md:gap-2"
        >
          {locations.map((location) => (
            <div key={location.id} className="flex flex-col gap-1 md:flex-row">
              <span className="font-medium text-primary uppercase">
                {location.name}:
              </span>
              <span className="text-primary-foreground">
                {location.address}
              </span>
            </div>
          ))}
        </motion.li>
      </ul>
      {/* <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Typography:</span> Google Fonts
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Images:</span> Freepik, Envato
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Privacy Policy
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Terms & Conditions
        </motion.li>
      </ul> */}
    </div>
  );
}
