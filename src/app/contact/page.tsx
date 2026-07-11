import type { Metadata } from "next";
import { ContactView } from "./ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Henri & Frères SARL. Head office in Yaoundé, with regional hubs across Cameroon. Talk to our team about distribution partnerships and enquiries.",
};

export default function ContactPage() {
  return <ContactView />;
}
