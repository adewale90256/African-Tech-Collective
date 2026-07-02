function About() {
  return (
    <div className="bg-[#091839]  px-5 py-10 flex flex-col  justify-center items-center">
      <section className="w-full max-w-5xl text-gray-300 space-y-4">
        <p className="text-amber-400 text-[13px] font-semibold">WHO WE ARE</p>

        <h1 className="text-2xl lg:text-3xl text-white font-serif font-bold scale-y-110 mb-5">
          About African Tech Collective
        </h1>

        <p>
          African Tech Collective Limited is a private limited company
          headquartered in Lagos, Nigeria. We are a platform business not an
          event company, not a social group. We exist to institutionalise access
          between Africa's most promising founders and the investors positioned
          to back them, using a distinctive combination of curated golf
          networking and a world-class digital platform.
        </p>

        <p>
          We are registered with the Corporate Affairs Commission (CAC) of
          Nigeria and operate across Lagos with a phased expansion into Abuja,
          Accra, Nairobi, and Johannesburg. Our model is commercially
          sustainable, institutionally credible, and deliberately selective.
        </p>

        <div className="bg-[#18336d] border-l-4 border-amber-300 rounded-2xl py-8 px-5 font-serif transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]">
          <p className="text-lg md:text-sm text-white">
            "To become Africa's most trusted platform for connecting exceptional
            founders with the capital, relationships, and resources needed to
            build globally competitive companies."
          </p>
        </div>

        <p className="text-[#98abd1] text-sm md:text-base leading-8">
          <span className="font-semibold text-white">Mission:</span> To build a
          structured, credible, and commercially sustainable ecosystem that
          eliminates the access gap between Africa's best founders and the
          investors positioned to back them — through curated community
          building, high-trust networking events, and a world-class digital
          platform.
        </p>
      </section>

      <section className="text-white mt-10 space-y-5 flex flex-col justify-center w-full  px-4 ">
        <h1 className="scale-y-110 font-semibold font-serif lg:text-2xl">
          Core Values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-5 border-b-[0.5px] border-gray-600 py-15">
          <div className="bg-[#160e6beb] px-6 py-8 flex gap-2 rounded w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] ">
            <span className="text-amber-400">⬡</span>
            <div>
              <h4 className="font-semibold text-[16px]">
                Credibility Over Volume
              </h4>
              <p className="text-[#98abd1] font-light">
                We curate, not collect. Every member reflects our standard.
              </p>
            </div>
          </div>
          <div className="bg-[#160e6beb] px-6 py-8 flex gap-2 rounded w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] ">
            <span className="text-amber-400">⬡</span>
            <div>
              <h4 className="font-semibold text-[16px]">
                Access Through Trust
              </h4>
              <p className="text-[#98abd1] font-light">
                Relationships before transactions. Always.
              </p>
            </div>
          </div>
          <div className="bg-[#160e6beb] px-6 py-8 flex gap-2 rounded w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] ">
            <span className="text-amber-400">⬡</span>
            <div>
              <h4 className="font-semibold text-[16px]">
                Excellence as Standard
              </h4>
              <p className="text-[#98abd1] font-light">
                Everything reflects the quality of who we serve.
              </p>
            </div>
          </div>
          <div className="bg-[#160e6beb] px-6 py-8 flex gap-2 rounded w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] ">
            <span className="text-amber-400">⬡</span>
            <div>
              <h4 className="font-semibold text-[16px]">
                Integrity in All Dealings
              </h4>
              <p className="text-[#98abd1] font-light">
                Governance, ethics, and transparency are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-20 border-t border-[#1c3f7a]">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
          The Founder
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start min-w-45">
            <div className="w-32 h-32 rounded-full border-2 border-amber-400 flex items-center justify-center">
              <span className="text-5xl font-serif font-bold text-amber-400">
                PO
              </span>
            </div>

            <p className="mt-5 text-amber-400 font-semibold tracking-[3px] text-sm">
              FOUNDER & CEO
            </p>

            <a
              href="#"
              className="mt-4 text-amber-400 text-sm hover:text-amber-300 transition"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Right Side */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Paul Omugbe
              </h3>

              <p className="text-amber-400 mt-2">
                Founder & CEO, African Tech Collective Limited
              </p>
            </div>

            <p className="text-gray-300 leading-9">
              Paul Omugbe is the founder and CEO of African Tech Collective. He
              brings deep experience across financial strategy, business
              advisory, and startup ecosystem building. As CFO of SkillzHQ
              Limited, he leads financial strategy for one of Nigeria's most
              active professional development platforms.
            </p>

            <p className="text-gray-300 leading-9">
              As founder of Mente Rica Limited, he has delivered advisory and
              project management services across construction, fintech, oil &
              gas, and healthcare sectors.
            </p>

            <p className="text-gray-300 leading-9">
              A VC Lab (Cohort 17) alumnus, Paul identified the access gap in
              the African startup ecosystem firsthand and validated golf as a
              uniquely effective relationship-building channel through his
              experience in Lagos club circles.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-5">
        <div className="bg-[#0b2d67] rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl text-center text-white font-serif font-bold mb-10">
            Why Golf?
          </h2>

          <div className="space-y-8 text-gray-200 leading-9 text-lg">
            <p>
              Golf in Nigeria and across West Africa is an HNI and corporate
              elite activity. The Lagos golf club scene is home to exactly the
              investor profile that African founders need access to: senior
              banking executives, family office principals, successful
              entrepreneurs, and diaspora investors deploying capital at home.
            </p>

            <p>
              No other ecosystem platform in Africa is using golf as a
              structured access channel. This is a genuine first-mover advantage
              grounded in a real, personally validated journey, not manufactured
              positioning. Paul's documented golf access series charts how this
              model was developed and tested in practice.
            </p>

            <p>
              What golf creates that no pitch competition or networking event
              can replicate is time. Four unstructured hours between a founder
              and an investor walking a course, sharing a conversation, reading
              each other as human beings. That relational depth is what converts
              interest into investment.
            </p>
          </div>

          <hr className="border-[#35558f] my-10" />

          <blockquote className="text-center">
            <p className="text-amber-400 text-xl md:text-2xl font-serif italic leading-relaxed">
              "We are not the first to host founder-investor events. We are the
              first to use golf as the access infrastructure and we built it
              from the ground up in Lagos."
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default About;
