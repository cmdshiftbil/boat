import { AnimateInOut } from "@/components/Animations";
import Section from "@/components/Section";
import Text from "@/components/Text";
import getPayloadClient from "@/payload/payloadClient";
import { prepareSeoData } from "@/utils/seo.utils";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const pageSlugName = "privacy";
  // read route params
  const id = params.id;

  const payload = await getPayloadClient();
  const pageResponse = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: { equals: pageSlugName },
    },
  });

  const pageData = pageResponse.docs?.[0] ?? {};
  const seoData = prepareSeoData(pageData);
  return seoData;
}

const date = "22 June, 2023";
const websiteName = "Alpha Nero";
const websiteUrl = "https://alpha-nero.com";
const email = "reception@alpha-nero.com";

export default async function PrivacyPage() {
  return (
    <AnimateInOut
      durationIn={0.6}
      durationOut={1}
      // Initial
      set={{
        transform: "translate(" + 0 + "px, " + 200 + "px)",
        opacity: 0,
        duration: 0.25,
        ease: "power4.out",
      }}
      // Transition In (to)
      to={{
        opacity: 1,
        x: 0,
        y: 0,
        ease: "power4.inOut",
      }}
      skipOutro={true}
    >
      <Section className="p-4 md:p-6 lg:p-12" title="Privacy Policy">
        <Text>
          Last updated: <strong>{date}</strong>
          <br />
          <br />
          <strong>{websiteName}</strong> (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or
          &ldquo;our&rdquo;) operates{" "}
          <a href={websiteUrl}>
            <strong>{websiteUrl}</strong>
          </a>{" "}
          (the &ldquo;Site&rdquo;). This page informs you of our policies
          regarding the collection, use and disclosure of Personal Information
          we receive from users of the Site.
          <br />
          <br />
          We use your Personal Information only for providing and improving the
          Site. By using the Site, you agree to the collection and use of
          information in accordance with this policy.
          <br />
          <br />
          Information Collection and Use
          <br />
          <br />
          While using our Site, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you. Personally identifiable information may include, but is
          not limited to your name, email address, and phone number
          (&ldquo;Personal Information&rdquo;).
          <br />
          <br />
          We collect this information for the purpose of providing the services
          offered by the Site, identifying and communicating with you,
          responding to your requests/inquiries, and improving our services.
          <br />
          <br />
          Log Data
          <br />
          <br />
          Like many site operators, we collect information that your browser
          sends whenever you visit our Site (&ldquo;Log Data&rdquo;). This Log
          Data may include information such as your computer&apos;s Internet
          Protocol (&ldquo;IP&rdquo;) address, browser type, browser version,
          the pages of our Site that you visit, the time and date of your visit,
          the time spent on those pages and other statistics.
          <br />
          <br />
          In addition, we may use third-party services such as Google Analytics
          that collect, monitor, and analyze this information in order to
          improve our services.
          <br />
          <br />
          Communications
          <br />
          <br />
          We may use your Personal Information to contact you with newsletters,
          marketing or promotional materials and other information that may be
          of interest to you. You may opt-out of receiving any, or all, of these
          communications from us by following the unsubscribe link or
          instructions provided in any email we send.
          <br />
          <br />
          Cookies
          <br />
          <br />
          Cookies are files with small amounts of data, which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          web site and stored on your computer&apos;s hard drive.
          <br />
          <br />
          Like many sites, we use &ldquo;cookies&rdquo; to collect information.
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Site.
          <br />
          <br />
          Security
          <br />
          <br />
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage, is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
          <br />
          <br />
          Changes to This Privacy Policy
          <br />
          <br />
          This Privacy Policy is effective as of {date} and will remain in
          effect except with respect to any changes in its provisions in the
          future, which will be in effect immediately after being posted on this
          page.
          <br />
          <br />
          We reserve the right to update or change our Privacy Policy at any
          time and you should check this Privacy Policy periodically. Your
          continued use of the Service after we post any modifications to the
          Privacy Policy on this page will constitute your acknowledgment of the
          modifications and your consent to abide and be bound by the modified
          Privacy Policy.
          <br />
          <br />
          If we make any material changes to this Privacy Policy, we will notify
          you either through the email address you have provided us, or by
          placing a prominent notice on our website.
          <br />
          <br />
          Contact Us
          <br />
          <br />
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href={`mailto:${email}`}>
            <strong>{email}</strong>
          </a>
          .
        </Text>
      </Section>
    </AnimateInOut>
  );
}
