import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";
import { ToastContainer } from "react-toastify";
import JsonLd from "@/components/__SEORelated/JsonLd";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Luciidai",
  description: "This is a discription of this page",
  keywords: "his is a discription of this page",
};

export default function RootLayout({ children }) {
  const jsonData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LuciidAI",
    url: "https://luciidai.com/",
    logo: "/assets/logo.png",
    description:
      "LuciidAI provides end‑to‑end annotation and AI development services, combining scalable human annotation workflows with quality‑driven processes to support machine learning model training and fine‑tuning.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },
    service: [
      {
        "@type": "Service",
        name: "Annotation Services",
        description:
          "Expert data annotation for computer vision, LLMs, dataset curation and fine‑tuning.",
      },
      {
        "@type": "Service",
        name: "LLM Training & Fine‑Tuning",
        description:
          "Training large language models via instruction tuning, dataset curation and human‑in‑the‑loop QA.",
      },
      {
        "@type": "Service",
        name: "AI & ML Development",
        description:
          "Custom AI/ML development combining project planning, annotation, coding and deployment.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Labeling & Development Pipeline",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pilot & QA Testing",
            description:
              "Pilot runs and multi‑layer QA including peer review, expert review and Super QA.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed Project Execution",
            description:
              "Full‑service management from freelance sourcing to final delivery.",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://luciidai.com/contact",
    },
  };

  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <JsonLd data={jsonData} />
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
