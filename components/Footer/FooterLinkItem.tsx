import Link from "next/link";

const FooterLinkItem = ({ to, title }: any) => (
  <li className="text-shark-50 clamp-text-xl mb-2 hover:text-shark-400 transition-colors">
    <Link href={to}>{title}</Link>
  </li>
);

export default FooterLinkItem;
