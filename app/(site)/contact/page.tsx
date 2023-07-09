import ContactForm from "@/components/ContactForm";
import ContactPageContent from "@/components/ContactPageContent";
import Map from "@/components/Map";
import Page from "@/components/Page";
import Section from "@/components/Section";

export default async function ContactPage() {
  return (
    <Page>
      <Section title="Let's talk">
        <ContactForm />
      </Section>

      <ContactPageContent />

      <section className="relative h-96">
        <Map />
      </section>
    </Page>
  );
}
