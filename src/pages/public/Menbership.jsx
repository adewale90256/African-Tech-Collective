import { Link } from "react-router-dom";

function Menbership() {
  return (
    <div className="h-100% bg-[#091839] text-white p-10 flex flex-col items-center">
      <h1 className="text-2xl lg:text-3xl text-white font-serif font-bold scale-y-120 mb-5">
        Membership
      </h1>
      <p className="text-[#98abd1] mb-10 text-center">
        Two tracks. Rigorous entry. Annual subscription. Genuine value.
      </p>

      {/**Founder */}
      <section className="mt-5">
        <p className="font-semibold text-[13px] text-amber-400 mb-5">
          FOUNDER MEMBERSHIP
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col md:w-90  lg:w-125 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-t-[3px] border-amber-400 rounded-2xl p-4 leading-none">
            <h1 className="font-semibold font-serif fo text-[17px] w-80 mb-5 lg:text-[19px]">
              Basic
            </h1>

            <p className="font-light font-serif text-amber-400 mb-5 text-[23px]">
              ₦50,000/yr
            </p>

            <div className="space-y-3 mb-15">
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>{" "}
                Community access
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Basic public-facing profile
              </p>
              <p className="text-[#98abd1] text-sm ">
                <span className="text-amber-400 font-semibold mr-2">✓</span> A
                Event calendar visibility
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                ATC newsletter access
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Peer network participation
              </p>
            </div>

            <Link
              to="/apply?role=founder&membership=basic&founderMembership=basic&investorMembership=standard"
              className="rounded-lg text-center bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] transition hover:bg-amber-300"
            >
              Apply as Founder
            </Link>
          </div>
          <div className="flex flex-col md:w-90 lg:w-125 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-t-[3px] border-amber-400 rounded-2xl p-4 leading-none">
            <p className="text-sm bg-amber-400 text-gray-700 font-semibold text-center w-30 rounded ml-auto">
              MOST POPULAR
            </p>
            <h1 className="font-semibold font-serif fo text-[17px] w-80 mb-5 lg:text-[19px]">
              Professinal
            </h1>

            <p className="font-light font-serif text-amber-400 mb-5 text-[23px]">
              ₦150,000/yr
            </p>

            <div className="space-y-3 mb-15">
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>{" "}
                Full founder profile with investor visibility
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Priority event access and registration
              </p>
              <p className="text-[#98abd1] text-sm ">
                <span className="text-amber-400 font-semibold mr-2">✓</span> A
                Deal flow introduction eligibility
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Investor readiness support from ATC team
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Curated peer learning groups
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Mentorship access
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Upgraded deal alerts
              </p>
            </div>

            <Link
              to="/apply?role=founder&membership=professional&founderMembership=professional&investorMembership=standard"
              className="rounded-lg text-center bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] transition hover:bg-amber-300"
            >
              Apply as Founder
            </Link>
          </div>
        </div>
      </section>

      {/**INvestor */}
      <section className="mt-5">
        <p className="font-semibold text-[13px] text-amber-400 mb-5">
          INVESTOR / HNI MEMBERSHIP
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col md:w-90  lg:w-125 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-t-[3px] border-amber-400 rounded-2xl p-4 leading-none">
            <h1 className="font-semibold font-serif fo text-[17px] w-80 mb-5 lg:text-[19px]">
              Standard
            </h1>

            <p className="font-light font-serif text-amber-400 mb-5 text-[23px]">
              ₦500,000/yr
            </p>

            <div className="space-y-3 mb-15">
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>{" "}
                Curated deal flow digest (weekly)
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Searchable founder profiles
              </p>
              <p className="text-[#98abd1] text-sm ">
                <span className="text-amber-400 font-semibold mr-2">✓</span> A
                Event access at member pricing
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Investment focus dashboard
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Targeted deal alerts by sector/stage
              </p>
            </div>

            <Link
              to="/apply?role=investor&membership=standard&founderMembership=basic&investorMembership=standard"
              className="rounded-lg text-center bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] transition hover:bg-amber-300"
            >
              Apply as Investor
            </Link>
          </div>
          <div className="flex flex-col md:w-90 lg:w-125 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-t-[3px] border-amber-400 rounded-2xl p-4 leading-none">
            <p className="text-sm bg-amber-400 text-gray-700 font-semibold text-center w-30 rounded ml-auto">
              RECOMMENDED
            </p>
            <h1 className="font-semibold font-serif fo text-[17px] w-80 mb-5 lg:text-[19px]">
              Premium
            </h1>

            <p className="font-light font-serif text-amber-400 mb-5 text-[23px]">
              ₦1,200,000/yr
            </p>

            <div className="space-y-3 mb-15">
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>{" "}
                Everything in Standard, plus:
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Direct messaging with founders (moderated)
              </p>
              <p className="text-[#98abd1] text-sm ">
                <span className="text-amber-400 font-semibold mr-2">✓</span> A
                Direct messaging with founders (moderated)
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Priority event registration (guaranteed placement)
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Quarterly private briefing with CEO Paul Omugbe
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Co-investment coordination support
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                White-glove onboarding
              </p>
            </div>

            <Link
              to="/apply?role=investor&membership=premium&founderMembership=basic&investorMembership=premium"
              className="rounded-lg text-center bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] transition hover:bg-amber-300"
            >
              Apply as Investor
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t-2 border-amber-300 rounded-2xl  text-sm hover:translate-y-2  bg-[#03246b] md:w-190 lg:w-260 p-10 space-y-5   transition-all duration-300 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  mt-8 mb-8">
        <h1 className="text-[20px] font-serif">
          Corporate & Institutional Partnerships
        </h1>

        <p className="text-[#98abd1] leading-loose">
          For banks, PE firms, professional services firms, and development
          institutions seeking structured engagement with Africa's emerging
          founder ecosystem. Partnership packages from ₦1M-₦5M per annum.
          Includes event sponsorship, content placement, talent access pipeline,
          and brand visibility within the ATC community.
        </p>

        <Link
          to="/partnership"
          className="flex items-center w-60 gap-2 rounded-lg border border-amber-400 px-6 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-300 hover:text-[#041B4A]"
        >
          Enquire About Partnership <span>→</span>
        </Link>
      </div>

      <section className="px-5 mt-5 w-full lg:w-260 md:w-190">
        <h1 className="text-[20] font-serif font-semibold scale-y-120 mb-5 mr-auto">
          Feature Comparison
        </h1>

        {/* table here */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead className="w-full">
              <tr className="bg-[#0B3D91] text-amber-400 uppercase">
                <th className="font-semibold text-[13px] text-amber-400 mb-5 py-3 px-6">
                  Feature
                </th>
                <th className="font-semibold text-[13px] text-amber-400 mb-5 py-3 px-6">
                  Basic
                </th>
                <th className="font-semibold text-[13px] text-amber-400 mb-5 py-3 px-6">
                  Pro
                </th>
                <th className="font-semibold text-[13px] text-amber-400 mb-5 py-3 px-6">
                  Standard
                </th>
                <th className="font-semibold text-[13px] text-amber-400 mb-5 py-3 px-6">
                  Premium
                </th>
              </tr>
            </thead>

            <tbody className="text-white">
              <tr className="border-b-[0.5px] border-gray-600">
                <td className="px-6 py-2 text-[13px] font-semibold">
                  Founder profile
                </td>
                <td className="px-6 py-2 text-[13px] text-[#98abd1]">Basic</td>
                <td className="px-6 py-2 text-[13px] text-amber-400">Full</td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
              </tr>

              <tr className="border-b-[0.5px] border-gray-600 bg-[#152646]">
                <td className="px-6 py-2 text-[13px] font-semibold ">
                  Investor visibility
                </td>
                <td className="px-6 py-2 text-[13px] text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-[13px] text-[#98abd1]">N/A</td>
                <td className="px-6 py-2 text-[13px] text-[#98abd1]">N/A</td>
              </tr>

              <tr className="border-b-[0.5px] border-gray-600">
                <td className="px-6 py-2 text-[13px] font-semibold">
                  Event access
                </td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-amber-400 text-[13px]">
                  Priority
                </td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-amber-400 text-[13px]">
                  Priority
                </td>
              </tr>

              <tr className="border-b-[0.5px] bg-[#152646] border-gray-600">
                <td className="px-6 py-2 text-[13px] font-semibold">
                  Deal flow digest
                </td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
              </tr>

              <tr className="border-b-[0.5px] border-gray-600">
                <td className="px-6 py-2 text-[13px] font-semibold">
                  Deal alerts
                </td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
              </tr>

              <tr className="border-b-[0.5px] bg-[#152646] border-gray-600">
                <td className="px-6 py-2 text-[13px] font-semibold">
                  Direct messaging
                </td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
              </tr>

              <tr className="border-b-[0.5px] border-gray-600">
                <td className="px-6 py-2 text-[13px] font-semibold">
                  Introduction requests
                </td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-amber-400">✓</td>
                <td className="px-6 py-2 text-[13px] text-amber-400">
                  4/month
                </td>
              </tr>

              <tr className="border-b-[0.5px] bg-[#152646] border-gray-600">
                <td className="px-6 py-2 text-[13px] font-semibold">
                  Analytics dashboard
                </td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-[13px] text-[#98abd1]">Basic</td>
                <td className="px-6 py-2 text-amber-400 text-[13px]">Full</td>
              </tr>

              <tr className="border-b-[0.5px] border-gray-600">
                <td className="px-6 py-2 text-[13px] font-semibold">
                  CEO access
                </td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-[#98abd1]">—</td>
                <td className="px-6 py-2 text-amber-400 text-[13px]">
                  Quarterly
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto mt-8">
        <h1 className="text-[20] font-serif font-semibold scale-y-120  mr-auto">
          Feature Comparison
        </h1>

        <details className="group border-b border-[#2b3d63] py-4">
          <summary className="flex cursor-pointer  items-center justify-between  text-white">
            <span>How are founders selected for the platform?</span>

            <span className="text-amber-400 transition-transform duration-300 group-open:rotate-180 scale-x-120 font-light">
              ˅
            </span>
          </summary>

          <p className="mt-6 text-sm text-[#98abd1]">
            All founders go through a structured application and review process.
            We assess business viability, founder credibility, and fit with our
            investor community. Applications typically take 5 business days to
            review.
          </p>
        </details>

        <details className="group border-b border-[#2b3d63] py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-white">
            <span>What does the investor verification process involve?</span>

            <span className="text-amber-400 transition-transform duration-300 group-open:rotate-180 scale-x-120 font-light">
              ˅
            </span>
          </summary>

          <p className="mt-6 text-sm text-[#98abd1]">
            Investor applicants are verified for investment capacity and intent.
            We do not accept unaccredited investors. Verification includes
            identity confirmation and a brief introductory call with the ATC
            team.
          </p>
        </details>

        <details className="group border-b border-[#2b3d63] py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-white">
            <span>Can I upgrade my membership tier?</span>

            <span className="text-amber-400 transition-transform duration-300 group-open:rotate-180 scale-x-120 font-light">
              ˅
            </span>
          </summary>

          <p className="mt-6 text-sm text-[#98abd1]">
            Yes. Members can upgrade at any time by paying the prorated
            difference. Upgrades are processed through the member dashboard
            within 24 hours.
          </p>
        </details>
      </section>
    </div>
  );
}

export default Menbership;
