function MembershipSummary({ role, selectedPlan, onChangeMembership }) {
  if (!selectedPlan) return null;

  return (
    <div className="w-full max-w-3xl mb-8 rounded-2xl border border-amber-400/30 bg-[#081F44] p-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm text-amber-400 font-semibold uppercase">
            Applying as {role}
          </p>

          <h2 className="mt-2 text-2xl font-serif text-white">
            {selectedPlan.name} Membership
          </h2>

          <p className="mt-2 text-[#98abd1]">
            ₦{selectedPlan.price.toLocaleString()}/{selectedPlan.duration}
          </p>

          <p className="mt-4 text-sm text-[#98abd1]">
            You selected this membership from the membership page.
          </p>
        </div>

        <button
          type="button"
          onClick={onChangeMembership}
          className="rounded-lg border border-amber-400 px-4 py-2 text-sm text-white transition hover:bg-amber-400 hover:text-[#041B4A]"
        >
          Change Membership
        </button>
      </div>
    </div>
  );
}

export default MembershipSummary;
