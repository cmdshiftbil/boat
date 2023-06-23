import { AnimateInOut } from "@/components/Animations";
import Section from "@/components/Section";
import Text from "@/components/Text";

const date = "22 June, 2023";
const websiteName = "Alpha Nero";
const websiteUrl = "https://alpha-nero.com";

export default async function Terms() {
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
      // TODO: Outro is not functional
      // Transition Out (from)
      // from={{
      //   transform: "translate(" + 0 + "px, " + 200 + "px)",
      //   opacity: 0,
      //   duration: 0.25,
      //   ease: "power4.out",
      // }}
      skipOutro={true}
    >
      <Section className="p-4 md:p-6 lg:p-12" title="Privacy Policy">
        <Text>
          Last updated: <strong>{date}</strong>
          <br />
          <br />
          Please read these terms and conditions (&ldquo;Terms&rdquo;,
          &ldquo;Terms and Conditions&rdquo;) carefully before using the{" "}
          <a href={websiteUrl}>
            <strong>{websiteUrl}</strong>
          </a>{" "}
          website (the &ldquo;Site&rdquo;) operated by{" "}
          <strong>{websiteName}</strong> (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or
          &ldquo;our&rdquo;).
          <br />
          <br />
          Your access to and use of the Site is conditioned upon your acceptance
          of and compliance with these Terms. These Terms apply to all visitors,
          users and others who wish to access or use the Site.
          <br />
          <br />
          By accessing or using the Site you agree to be bound by these Terms.
          If you disagree with any part of the terms then you do not have
          permission to access the Site.
          <br />
          <br />
          Content
          <br />
          <br />
          Our Site allows you to post, link, store, share and otherwise make
          available certain information, text, graphics, videos, or other
          material (&ldquo;Content&rdquo;). You are responsible for the Content
          that you post on or through the Site, including its legality,
          reliability, and appropriateness.
          <br />
          <br />
          By posting Content on or through the Site, you grant us the right to
          use, modify, publicly perform, publicly display, reproduce, and
          distribute such Content on and through the Site. You retain any and
          all of your rights to any Content you submit, post, or display on or
          through the Site and you are responsible for protecting those rights.
          <br />
          <br />
          We reserve the right to remove Content that violates these Terms or
          that we believe is harmful or offensive in any way.
          <br />
          <br />
          Intellectual Property
          <br />
          <br />
          The Site and its original content, features, and functionality are
          owned by <strong>{websiteName}</strong> and are protected by
          international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
          <br />
          <br />
          Termination
          <br />
          <br />
          We may terminate or suspend your access to the Site immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach these Terms.
          <br />
          <br />
          All provisions of these Terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity, and limitations
          of liability.
          <br />
          <br />
          Links To Other Web Sites
          <br />
          <br />
          Our Site may contain links to third-party web sites or services that
          are not owned or controlled by <strong>{websiteName}</strong>.
          <br />
          <br />
          <strong>{websiteName}</strong> has no control over, and assumes no
          responsibility for, the content, privacy policies, or practices of any
          third-party web sites or services. You further acknowledge and agree
          that <strong>{websiteName}</strong> shall not be responsible or
          liable, directly or indirectly, for any damage or loss caused or
          alleged to be caused by or in connection with use of or reliance on
          any such content, goods or services available on or through any such
          web sites or services.
          <br />
          <br />
          We strongly advise you to read the terms and conditions and privacy
          policies of any third-party web sites or services that you visit.
          <br />
          <br />
          Limitation of Liability
          <br />
          <br />
          In no event shall <strong>{websiteName}</strong>, nor its directors,
          employees, partners, agents, suppliers, or affiliates, be liable for
          any indirect, incidental, special, consequential or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from (i) your access to or use of
          or inability to access or use the Site; (ii) any conduct or content of
          any third party on the Site; (iii) any content obtained from the Site;
          and (iv) unauthorized access, use or alteration of your transmissions
          or content, whether based on warranty, contract, tort (including
          negligence) or any other legal theory, whether or not we have been
          informed of the possibility of such damage, and even if a remedy set
          forth herein is found to have failed of its essential purpose.
          <br />
          <br />
          Disclaimer
          <br />
          <br />
          Your use of the Site is at your sole risk. The Site is provided on an
          &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. The Site is
          provided without warranties of any kind, whether express or
          <br />
          <br />
        </Text>
      </Section>
    </AnimateInOut>
  );
}
