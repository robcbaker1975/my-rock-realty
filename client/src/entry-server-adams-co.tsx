/**
 * IL-42 Selective Prerender — SSR Entry for /adams-co-homes-for-sale
 * Scope: /adams-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import AdamsCoHomesForSale from "./pages/AdamsCoHomesForSale";
import { buildFAQPageSchema } from "./lib/seo/schema";

/* FAQ Content from AdamsCoHomesForSale — must match exactly */
const faqContent = [
  {
    question: "What are the most popular areas for buying a home in Adams County?",
    answer:
      "Adams County includes a range of communities with different housing types, price points, and community characters. Commerce City is one of the county's primary cities, and buyers often explore communities across the county when evaluating options. Buyers should research individual communities and neighborhoods to find the best fit for their needs and priorities.",
  },
  {
    question: "What types of homes are available in Adams County?",
    answer:
      "Adams County offers a variety of housing options including single-family homes, townhomes, and newer construction communities. Price ranges and housing styles vary significantly by community and neighborhood. Buyers should research specific areas to understand what's available at their budget.",
  },
  {
    question: "How does Adams County compare to other Denver metro areas?",
    answer:
      "Adams County is located northeast of Denver and offers a different community character and market dynamic than the city itself. Buyers often compare Adams County communities to other Denver metro suburbs when evaluating options. Buyers should research current conditions in each area to make an informed comparison.",
  },
  {
    question: "Is Adams County a competitive real estate market?",
    answer:
      "Market conditions in Adams County vary by community, price range, and season. Inventory levels and demand shift over time, so buyers should research current conditions and work with an agent familiar with the local market to understand what to expect.",
  },
  {
    question: "What should I know about Adams County school districts?",
    answer:
      "Adams County is served by several school districts depending on the specific community. Buyers should independently research specific schools, boundaries, and district information to understand what matters most for their family.",
  },
  {
    question: "Where should I start if I want to buy a home in Adams County?",
    answer:
      "A good starting point is understanding your budget, getting pre-approved, and learning about the different communities within Adams County. Working with an agent familiar with the Adams County market can help you navigate the process and understand neighborhood-specific dynamics.",
  },
  {
    question: "What is the commute like from Adams County to Denver?",
    answer:
      "Adams County is located northeast of Denver. Commute times and conditions vary depending on the specific community, destination, and time of day. Buyers should independently research commute routes and conditions that are relevant to their situation.",
  },
  {
    question: "Are there new construction homes available in Adams County?",
    answer:
      "New construction activity in Adams County varies by community and market conditions. Buyers interested in new construction should research current builder activity and available communities. Working with an agent familiar with the local market can help identify new construction options.",
  },
  {
    question: "What are the main differences between Adams County communities?",
    answer:
      "Adams County communities vary in character, price point, and proximity to Denver. Commerce City is one of the county's primary cities, while other communities offer different characteristics. Buyers should research individual communities to find the best fit for their priorities.",
  },
  {
    question: "How do I get started buying a home in Adams County?",
    answer:
      "Getting pre-approved for a mortgage is often a practical first step. From there, working with an agent who knows Adams County can help you understand current inventory, pricing, and the buying process in the communities you're considering.",
  },
];

export function renderAdamsCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/adams-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <AdamsCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}

/* Export FAQ schema for prerender script to inject into shell head */
export function getAdamsCoFaqSchema() {
  return buildFAQPageSchema(faqContent);
}
