import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions of Economizing Futura.",
  alternates: { canonical: "/termsandconditions" },
};

export default function Page() {
  return <TermsClient />;
}
