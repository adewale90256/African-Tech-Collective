import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Platform() {
  const tabs = [
    "Founder Profiles",
    "Investor Deal Flow",
    "Event Management",
    "Membership Management",
    "Content & Insight Hub",
    "Analytics & Metrics",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-[#091839] flex flex-col justify-center items-center">
      <section className=" text-white py-20 w-full px-5 md:w-200">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              The Platform
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-[#98abd1]">
              Not a directory. Not a social network. A structured,
              permission-based environment where curated founders and verified
              investors find each other, evaluate each other, and progress
              toward real business relationships.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {[
              "Curation over openness",
              "Relationship depth over volume",
              "Trust architecture",
              "Privacy-first",
              "Mobile-first",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-amber-400 rounded-full text-amber-400 text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-14 overflow-x-auto">
            <div className="flex gap-8 min-w-max border-b border-[#35558f]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 whitespace-nowrap transition ${
                    activeTab === tab
                      ? "text-amber-400 border-b-2 border-amber-400"
                      : "text-[#98abd1]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div className="mt-8 bg-[#053485] border-t-2 border-amber-300 rounded-2xl  p-8 md:p-10 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">
              {activeTab}
            </h3>

            <p className="text-[#d5def1]">
              Every approved founder has a structured professional profile
              presenting their company to verified investor members. Includes:
              founder bio and credentials, company overview and sector,
              problem/solution summary, team profiles, financial summary,
              current funding ask and instrument, traction metrics and
              milestones, pitch deck upload, and explicit relationship goals.
            </p>

            <p className="text-[#d5def1] mt-4">
              Founders control visibility by membership tier financial details
              visible to verified investors only by default.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center mb-5 items-center text-white gap-3 px-5  md:w-155  ">
        <div className="border-l-2 border-amber-300 px-3">
          <p className="font-serif font-light text-gray-400">
            "To be the most trusted digital infrastructure for investor founder
            access in Africa small, curated, and consequential rather than
            large, open, and noisy."
          </p>
        </div>

        <Link
          to="/apply"
          className=" flex  justify-center items-center w-50 rounded-lg text-center bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] transition hover:bg-amber-300"
        >
          Request Early Access <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}

export default Platform;
