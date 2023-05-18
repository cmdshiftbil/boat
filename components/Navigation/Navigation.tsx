import { useState, useEffect, useRef } from "react";
import NavigationItem from "./NavigationItem";
import gsap from "gsap";
import useGsapEffect from "@/hooks/useGsapEffect";
import useOnChangeRoute from "@/hooks/useOnChangeRoute";
import BlueprintLabel from "../BlueprintLabel";
import Logo from "../Logo";
import HamburgerButton from "./HamburgerButton";
import NavigationToggle from "./NavigationToggle";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Footer from "../Footer";
import ContactBox from "../ContactBox/ContactBox";
import Link from "next/link";

const navigationItems = [
  { id: "1", url: "/", label: "Home" },
  { id: "2", url: "/about", label: "About" },
  { id: "3", url: "/projects", label: "Projects" },
  { id: "4", url: "/services", label: "Services" },
  { id: "5", url: "/contact", label: "Contact" },
  { id: "6", url: "/blog", label: "Blog" },
];

const Navigation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef<GSAPTimeline>(
    gsap.timeline({
      paused: true,
    })
  );

  useEffect(() => {
    tl.current.reversed(!isOpen);
  }, [isOpen]);

  useOnChangeRoute(() => {
    setIsOpen(false);
  });

  useGsapEffect((self: any) => {
    const navItems = self.selector(".nav-item a");

    tl.current.to(".nav-full-page", {
      duration: 0,
      display: "block",
      ease: "Expo.easeInOut",
    });

    tl.current.from(".page-stroke", {
      duration: 0.8,
      x: "100%",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });

    tl.current.to(
      ".logo",
      {
        duration: 0.7,
        fill: "black",
      },
      "-=0.8"
    );

    tl.current.to(
      ".hamburger-icon path",
      {
        duration: 0.7,
        stroke: "black",
      },
      "-=0.7"
    );

    tl.current.to(
      ".nav-bar",
      {
        duration: 0.7,
        backgroundColor: "transparent",
      },
      "-=0.7"
    );

    tl.current.fromTo(
      ".nav-address",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
      },
      "-=0.4"
    );

    tl.current.from(
      navItems,
      {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.09,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

    const navBar = gsap
      .from(".nav-bar", {
        // yPercent: -100,
        paused: true,
        duration: 0.5,
        height: 50,
      })
      .progress(1);

    const logo = gsap.from(".logo", {
      duration: 0.3,
      scale: 0.8,
      paused: true,
    });

    const logoName = gsap.from(".logo-name", {
      duration: 0.3,
      y: 100,
      paused: true,
    });

    const logoIcon = gsap
      .from(".logo-icon", {
        duration: 0.3,
        y: 13,
        paused: true,
      })
      .progress(1);

    tl.current.reverse();

    ScrollTrigger.create({
      start: "top -150",
      end: "999999",
      scrub: 1,
      onUpdate: (self) => {
        self.direction === -1 ? logoIcon.play() : logoIcon.reverse();
        self.direction === -1 ? logoName.play() : logoName.reverse();
        self.direction === -1 ? logo.play() : logo.reverse();
        self.direction === -1 ? navBar.play() : navBar.reverse();
      },
    });
  }, ref);

  const onClickMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="relative z-50 ">
      <div className="fixed top-0 left-0 z-10 flex justify-between w-full p-6 nav-bar sm:p-12">
        <div className="flex items-center justify-between flex-1">
          <div className="brand-logo">
            <Link href="/" aria-label="Alpha Nero Homepage button">
              <Logo className="fill-shark-50 logo" />
            </Link>
            {/* TODO: remove debug code */}
            {/* <Link
              href="/about"
              aria-label="Alpha Nero Homepage button"
              className="text-white"
            >
              About
            </Link>
            <Link
              href="/services"
              aria-label="Alpha Nero Homepage button"
              className="text-white"
            >
              Services
            </Link>
            <Link
              href="/projects"
              aria-label="Alpha Nero Homepage button"
              className="text-white"
            >
              Projects
            </Link> */}
          </div>
          <HamburgerButton isOpen={isOpen} onClick={onClickMenuToggle} />
        </div>
      </div>

      <section className="fixed top-0 left-0 hidden w-full h-screen p-6 nav-full-page sm:p-12">
        <div className="flex items-center h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <span className="block w-full page-stroke h-2/6 bg-shark-50" />
            <span className="block w-full page-stroke h-2/6 bg-shark-50" />
            <span className="block w-full page-stroke h-2/6 bg-shark-50" />
          </div>

          <div className=" relative z-10 flex flex-col items-center justify-between w-full max-w-3xl gap-6 mx-auto sm:flex-row ">
            <nav>
              <ul className="main-nav">
                {navigationItems.map((item) => (
                  <NavigationItem
                    onClick={() => setIsOpen(false)}
                    className="overflow-hidden transition-transform duration-300 ease-in-out nav-item hover:translate-x-5 text-shark-900"
                    key={item.id}
                    i={item.id}
                    path={item.url}
                    label={item.label}
                  />
                ))}
              </ul>
            </nav>

            <div className="hidden sm:flex flex-col gap-6 opacity-0 nav-address">
              <address className="flex flex-col gap-12 not-italic text-shark-900">
                <div className="flex flex-col">
                  <BlueprintLabel
                    label="Get in touch"
                    className="text-shark-900"
                  />

                  <a
                    className="mb-4 font-bold underline underline-offset-8"
                    href="tel:+97144270592"
                  >
                    +971 44270 592
                  </a>
                  <a
                    className="font-bold underline underline-offset-8"
                    href="mailto:contact@alpha-nero.com"
                  >
                    contact@alpha-nero.com
                  </a>
                </div>
              </address>
              <ContactBox title="Dubai" className="invert">
                <ContactBox.Item
                  hideTitle
                  title="address"
                  description="Warehouse C07 1-2-3, |br Dubai Production City P.O. |br BOX 485008, |br Dubai, United Arab Emirates"
                />
              </ContactBox>

              <ContactBox title="Riyadh" className="invert">
                <ContactBox.Item
                  hideTitle
                  title="address"
                  description="Warehouse C07 1-2-3, |br Riyadh Production City P.O. |br BOX 485008, |br Riyadh, United Arab Emirates"
                />
              </ContactBox>

              <div className="header-nav-footer">
                <ul className="flex flex-row gap-4 social-links">
                  <li>
                    <a href="#">.Fc</a>
                  </li>
                  <li>
                    <a href="#">.Ig</a>
                  </li>
                  <li>
                    <a href="#">.Tw</a>
                  </li>
                  <li>
                    <a href="#">.Li</a>
                  </li>
                  <li>&copy;{new Date().getFullYear()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
