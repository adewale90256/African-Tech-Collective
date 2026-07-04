import FounderForm from "../../components/singupforms/FounderForm";
import InvestorForm from "../../components/singupforms/InvestorForm";
import useMembership from "../../hooks/useMembership";
import MembershipSummary from "../../components/membership/MembershipSummary";
import { useNavigate } from "react-router-dom";

function ApplyNow() {
  const navigate = useNavigate();
  const { activeRole, currentMembership, selectedPlan, switchRole } =
    useMembership();

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
            onClick={() => switchRole("founder")}
            className={`px-6 py-3 border-b border-amber-300 transition ${
              activeRole === "founder"
                ? " border-yellow-400 text-white"
                : "border-transparent text-gray-400"
            }`}
          >
            Apply as Founder
          </button>

          <button
            onClick={() => switchRole("investor")}
            className={`px-6 py-3 border-b border-amber-300 transition ${
              activeRole === "investor"
                ? " border-yellow-400 text-white"
                : "border-transparent text-gray-400"
            }`}
          >
            Apply as Investor / HNI
          </button>
        </div>

        <MembershipSummary
          role={activeRole}
          selectedPlan={selectedPlan}
          onChangeMembership={() => navigate("/membership")}
        />

        <div className="p-5 flex flex-col justify-center items-center">
          {activeRole === "founder" ? (
            <FounderForm selectedPlan={selectedPlan} />
          ) : (
            <InvestorForm selectedPlan={selectedPlan} />
          )}
        </div>

        {/* Form 
        <div className="p-5 flex flex-col justify-center items-center">
          {activeRole === "founder" ? (
            <FounderForm membership={currentMembership} />
          ) : (
            <InvestorForm membership={currentMembership} />
          )}
        </div>*/}
      </section>
    </div>
  );
}
export default ApplyNow;
