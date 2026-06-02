import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy of Economizing Futura.",
  alternates: { canonical: "/privacypolicy" },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}
