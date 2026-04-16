/**
 * NeedsWantsDreams.tsx
 * Worksheet landing page for the Needs, Wants & Dreams worksheet.
 * Route: /colorado-home-buying-workshop/resources/needs-wants-dreams
 * Scope: This page only. Do not add other worksheets or resource links here.
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import SeoHead from "@/components/seo/SeoHead";

const DEEP_CHARCOAL = "bg-[#292524]";
const CREAM = "bg-[#F5F0EB]";
const GOLD = "text-[#C9A96E]";
const CHARCOAL_TEXT = "text-[#292524]";
const CREAM_TEXT = "text-[#F5F0EB]";

const breadcrumbItems = [
  { label: "Home", href: "https://myrockhomes.com/" },
  { label: "Colorado Home Buying Workshop", href: "https://myrockhomes.com/colorado-home-buying-workshop/" },
  { label: "Workshop Resources", href: "https://myrockhomes.com/colorado-home-buying-workshop/resources/" },
  { label: "Needs, Wants & Dreams Worksheet", href: "https://myrockhomes.com/colorado-home-buying-workshop/resources/needs-wants-dreams/" },
];

export default function NeedsWantsDreams() {
  useEffect(() => {
    document.title = "Needs, Wants & Dreams Worksheet | Colorado Home Buying Workshop";
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${DEEP_CHARCOAL}`}>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Needs, Wants & Dreams Worksheet | Colorado Home Buying Workshop",
          description: "Before you start touring homes, get clear on what you actually need. This worksheet helps Colorado buyers separate true needs from nice-to-haves — so your search stays focused and your decisions stay grounded.",
          canonicalUrl: "https://myrockhomes.com/colorado-home-buying-workshop/resources/needs-wants-dreams/",
          breadcrumbs: breadcrumbItems,
        }}
      />

      <main className="flex-1">

        {/* ─── Hero ─── */}
        <section className={`${DEEP_CHARCOAL} pt-[72px] pb-12 px-4`}>
          <div className="max-w-2xl mx-auto text-center pt-10">
            <p className={`text-sm font-semibold tracking-widest uppercase ${GOLD} mb-3`}>
              Workshop Worksheet
            </p>
            <h1 className={`text-4xl md:text-5xl font-bold ${CREAM_TEXT} leading-tight mb-5`}>
              Needs, Wants & Dreams
            </h1>
            <p className={`text-lg ${CREAM_TEXT} opacity-80 leading-relaxed`}>
              Most buyers start searching before they know what they're actually looking for.
              This worksheet helps fix that.
            </p>
          </div>
        </section>

        {/* ─── Why This Worksheet Matters ─── */}
        <section className={`${CREAM} py-12 px-4`}>
          <div className="max-w-2xl mx-auto">
            <h2 className={`text-2xl font-bold ${CHARCOAL_TEXT} mb-4`}>
              Why most buyers should start here
            </h2>
            <p className={`${CHARCOAL_TEXT} opacity-80 leading-relaxed mb-4`}>
              The most common mistake I see buyers make isn't choosing the wrong home — it's
              starting the search before they've figured out what they actually need. They bounce
              around listings, get attached to the wrong things, and end up making reactive
              decisions under time pressure.
            </p>
            <p className={`${CHARCOAL_TEXT} opacity-80 leading-relaxed mb-4`}>
              Getting clear on needs, wants, and dreams before you tour a single home changes the
              whole process. Your search gets tighter. Your conversations with your agent get more
              productive. And when you do find the right home, you'll know it — because you've
              already thought through what "right" means for you.
            </p>
            <p className={`${CHARCOAL_TEXT} opacity-80 leading-relaxed`}>
              This worksheet takes 15–20 minutes. It's worth doing before you look at anything.
            </p>
          </div>
        </section>

        {/* ─── What It Helps You Figure Out ─── */}
        <section className={`${DEEP_CHARCOAL} py-12 px-4`}>
          <div className="max-w-2xl mx-auto">
            <h2 className={`text-2xl font-bold ${CREAM_TEXT} mb-6`}>
              What the worksheet helps you figure out
            </h2>
            <ul className="space-y-4">
              {[
                {
                  label: "True needs",
                  desc: "The things that aren't negotiable — bedrooms, location, accessibility, school district, whatever your situation actually requires.",
                },
                {
                  label: "Flexible wants",
                  desc: "Things you'd like to have but could live without — a garage, a bigger yard, a specific style. These are trade-off territory.",
                },
                {
                  label: "Longer-term dreams",
                  desc: "Things that would be great but aren't realistic right now. Worth knowing so you don't accidentally chase them at the expense of what you actually need.",
                },
              ].map(({ label, desc }) => (
                <li key={label} className="flex gap-4 items-start">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 bg-[#C9A96E]`} />
                  <div>
                    <span className={`font-semibold ${CREAM_TEXT}`}>{label}: </span>
                    <span className={`${CREAM_TEXT} opacity-75`}>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── Lead-in to Embed ─── */}
        <section className={`${CREAM} py-10 px-4`}>
          <div className="max-w-2xl mx-auto text-center">
            <p className={`text-lg ${CHARCOAL_TEXT} opacity-80 leading-relaxed`}>
              Take your time with this. There are no right answers — just honest ones. The goal
              is to walk away with a clearer picture of what you're actually looking for, so the
              search works for you instead of the other way around.
            </p>
          </div>
        </section>

        {/* ─── Embed ─── */}
        <section className={`${DEEP_CHARCOAL} py-12 px-4`} id="worksheet">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg overflow-hidden bg-white">
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/vmVwMetnLLR1p5xHDyJo"
                style={{ border: "none", width: "100%", minHeight: "600px" }}
                scrolling="no"
                id="vmVwMetnLLR1p5xHDyJo"
                title="survey"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js" />
            </div>
          </div>
        </section>

        {/* ─── Next Step Note ─── */}
        <section className={`${CREAM} py-10 px-4`}>
          <div className="max-w-2xl mx-auto text-center">
            <p className={`${CHARCOAL_TEXT} opacity-70 text-sm leading-relaxed mb-3`}>
              Once you've worked through this, the next worksheet in the sequence is the{" "}
              <a
                href="/colorado-home-buying-workshop/resources"
                className="underline hover:opacity-80"
              >
                Monthly Payment Comfort worksheet
              </a>
              {" "}— useful to complete before you start writing offers.
            </p>
            <p className={`${CHARCOAL_TEXT} opacity-70 text-sm`}>
              Questions?{" "}
              <a href="mailto:rob@myrockhomes.com" className="underline hover:opacity-80">
                Reach out to Rob directly
              </a>
              .
            </p>
          </div>
        </section>

        {/* ─── Back Link ─── */}
        <section className={`${DEEP_CHARCOAL} py-6 px-4`}>
          <div className="max-w-2xl mx-auto text-center">
            <a
              href="/colorado-home-buying-workshop/resources"
              className={`text-sm ${GOLD} underline hover:opacity-80`}
            >
              ← Back to Workshop Resources
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
