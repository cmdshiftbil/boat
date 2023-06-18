import Copyright from "../Copyright/Copyright";
import Logo from "../Logo";
import FooterAddress from "./FooterAddress";
import FooterNavigationItem from "./FooterNavigationItem";

const mainNavigationLinks = [
  {
    id: "5dd7caa0-d5e3-45cb-93c2-9cdd1f5d658c",
    title: "Home",
    url: "/",
  },
  {
    id: "4c54dc29-c98f-45e2-b3ff-4dfd3bdd1060",
    title: "About",
    url: "/about",
  },
  {
    id: "fe46c086-fb06-4f9b-9d2d-12b4b87370fd",
    title: "Projects",
    url: "/projects",
  },
  {
    id: "fab076fb-90fc-4eb8-a40d-16169b5b4775",
    title: "Services",
    url: "/services",
  },
  {
    id: "f59b487e-65d6-4501-9c19-c9bedac75930",
    title: "Contact",
    url: "/contact",
  },
];

const socialMediaLinks = [
  {
    id: "3ef95a95-82b7-4562-89b2-1d8b6a7dcac9",
    title: "Twitter",
    url: "/",
  },
  {
    id: "ae88bb0d-644a-4d4a-9efc-6807fd7b3dc4",
    title: "Instagram",
    url: "/",
  },
  {
    id: "6ec06999-4878-4a64-924d-33b1e7525a42",
    title: "Linkedin",
    url: "/",
  },
];

const legalLinks = [
  {
    id: "3540d3e8-82e0-4a5d-a3b4-438ce5ae5c21",
    title: "Privacy",
    url: "/privacy",
  },
  {
    id: "6ff424cd-d000-4c90-b5f5-8f3055d50295",
    title: "Terms",
    url: "/terms",
  },
];

const alphaNeroSubLinks = [
  {
    id: "f5a3bda8-526b-474a-8254-6538247fa475",
    title: "Blog",
    url: "/blog",
  },
  {
    id: "dbf7011e-ae27-4f76-b5c9-1765ceacbbe1",
    title: "Press",
    url: "/press",
  },
  {
    id: "deeae65a-a400-4b1e-8a70-3122417f11d9",
    title: "Careers",
    url: "/careers",
  },
];

const Footer = () => {
  return (
    <footer className="bg-shark-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      {/* max-w-7xl */}
      <div className="px-6 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8 lg:pt-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 justify-items-end">
          <div className="mx-auto w-fit">
            <Logo />
            {/* <FooterAddress /> */}
          </div>
          <div className="grid max-w-4xl grid-cols-2 gap-12 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <FooterNavigationItem
                title="Main Navigation"
                links={mainNavigationLinks}
              />

              <FooterNavigationItem
                title="Social Media"
                links={socialMediaLinks}
                className="mt-10 md:mt-0"
              />
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-12">
              <FooterNavigationItem title="Legal" links={legalLinks} />

              <FooterNavigationItem
                title="At Alpha Nero"
                links={alphaNeroSubLinks}
                className="mt-10 md:mt-0"
              />
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-xs leading-5 text-shark-400 md:mt-0">
            &copy; {new Date().getFullYear()} Alpha Nero, FZ LLC. All rights
            reserved.
          </p>
          <div className="flex space-x-6 ">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
