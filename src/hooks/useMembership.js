import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import membershipPlans from "../data/membershipPlans";

const defaultMembership = {
  founder: "basic",
  investor: "standard",
};

function useMembership() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeRole = searchParams.get("role") || "founder";

  const currentMembership =
    searchParams.get("membership") || defaultMembership[activeRole];

  const founderMembership =
    searchParams.get("founderMembership") || defaultMembership.founder;

  const investorMembership =
    searchParams.get("investorMembership") || defaultMembership.investor;

  const selectedPlan = useMemo(() => {
    return membershipPlans[activeRole]?.[currentMembership];
  }, [activeRole, currentMembership]);

  function switchRole(role) {
    setSearchParams({
      role,
      membership: role === "founder" ? founderMembership : investorMembership,

      founderMembership,
      investorMembership,
    });
  }

  return {
    activeRole,
    currentMembership,
    founderMembership,
    investorMembership,
    selectedPlan,
    switchRole,
    setSearchParams,
  };
}

export default useMembership;
