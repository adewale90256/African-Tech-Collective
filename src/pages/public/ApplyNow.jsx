import { useState } from "react";
import FounderForm from "../../components/loginforms/FounderForm";
import InvestorForm from "../../components/loginforms/InvestorForm";
import { useSearchParams } from "react-router-dom";

function ApplyNow() {
  const [searchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState(
    searchParams.get("type") || "founder",
  );

  return (
    <div className="bg-[#091839] h-100% flex flex-col justify-center items-center">
      <section className="text-white mt-5 mb-8 flex flex-col justify-center items-center gap-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mt-10">
          Apply to Join
        </h1>

        <p className="max-w-3xl mx-auto text-[#98abd1] text-center">
          Two tracks. Structured process. Every application reviewed personally.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center">
        {/* Tabs */}
        <div className=" flex items-center justify-center gap-2 border-b-[0.5px]  border-gray-600 md:w-170 ">
          <button
            onClick={() => setActiveTab("founder")}
            className={`px-6 py-3 border-b border-amber-300 transition ${
              activeTab === "founder"
                ? " border-yellow-400 text-white"
                : "border-transparent text-gray-400"
            }`}
          >
            Apply as Founder
          </button>

          <button
            onClick={() => setActiveTab("investor")}
            className={`px-6 py-3 border-b border-amber-300 transition ${
              activeTab === "investor"
                ? " border-yellow-400 text-white"
                : "border-transparent text-gray-400"
            }`}
          >
            Apply as Investor / HNI
          </button>
        </div>

        {/* Form */}
        <div className="p-5 flex flex-col justify-center items-center">
          {activeTab === "founder" ? <FounderForm /> : <InvestorForm />}
        </div>
      </section>
    </div>
  );
}
export default ApplyNow;
