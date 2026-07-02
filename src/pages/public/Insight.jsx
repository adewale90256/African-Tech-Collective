import { Link } from "react-router-dom";

function Insight() {
  return (
    <div className="h-100% bg-[#091839] text-white px-4 flex flex-col items-center">
      <h1 className="text-2xl lg:text-3xl text-white font-serif font-bold scale-y-120 mb-5 mt-15">
        Insights
      </h1>

      <p className="text-[#98abd1] mb-10 text-center">
        Ecosystem analysis. Founder stories. The golf access journey.
      </p>

      <div className="border-t-2 border-amber-300 rounded-2xl  text-sm hover:-translate-y-2  bg-[#03246b] md:w-195 lg:w-265 px-3 py-6 space-y-2   transition-all duration-300 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  mt-8 mb-8">
        <p className="font-semibold text-[13px] text-amber-400 border border-amber-400 rounded-full w-fit px-4 py-1">
          Golf Access Series
        </p>
        <h1 className="text-[20px] font-serif font-bold sca">
          Why Golf Is the Most Underutilised Access Channel in African Tech
        </h1>

        <p className="text-[#98abd1] leading-loose">Paul Omugbe · 2025</p>
        <p className="leading-loose">
          Most ecosystem builders think about pitch competitions, WhatsApp
          groups, and accelerators. Nobody has looked seriously at golf until
          now. Here is what we discovered...
        </p>

        <Link
          to="/partnership"
          className="flex items-center w-60 gap-2 rounded-lg text-sm font-semibold text-amber-400"
        >
          Read Article<span>→</span>
        </Link>
      </div>

      <section className="text-white mt-10 space-y-5 flex flex-col justify-center w-full md:w-195 lg:w-265  px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-5  py-15">
          <div className="bg-[#160e6beb] px-6 py-4 flex gap-2 rounded w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] ">
            <div className="space-y-2">
              <p className="font-semibold text-[13px] text-amber-400 border border-amber-400 rounded-full w-fit px-4 py-1">
                The Access Gap
              </p>
              <h4 className="font-semibold text-[16px]">
                The Access Gap Why African Founders Struggle to Reach the Right
                Investors
              </h4>
              <p className="text-[#98abd1] font-light">
                The structural reasons the capital access gap persists, and what
                real solutions look like.
              </p>
              <Link
                to="/partnership"
                className="flex items-center w-60 gap-2 rounded-lg text-sm font-semibold text-amber-400"
              >
                Read<span>→</span>
              </Link>
            </div>
          </div>
          <div className="bg-[#160e6beb] px-6 py-4 flex gap-2 rounded w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] ">
            <div className="space-y-2">
              <p className="font-semibold text-[13px] text-amber-400 border border-amber-400 rounded-full w-fit px-4 py-1">
                Founder Spotlight
              </p>
              <h4 className="font-semibold text-[16px]">
                Building in Lagos — What It Actually Takes
              </h4>
              <p className="text-[#98abd1] font-light">
                A candid conversation with an ATC founder member about survival,
                persistence, and the moment everything changed.
              </p>
              <Link
                to="/partnership"
                className="flex items-center w-60 gap-2 rounded-lg text-sm font-semibold text-amber-400"
              >
                Read <span>→</span>
              </Link>
            </div>
          </div>
          <div className="bg-[#160e6beb] px-6 py-4 flex gap-2 rounded w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] ">
            <div className="space-y-2">
              <p className="font-semibold text-[13px] text-amber-400 border border-amber-400 rounded-full w-fit px-4 py-1">
                Golf Journal
              </p>
              <h4 className="font-semibold text-[16px]">
                Entry 01: My First Round With a Lagos HNI
              </h4>
              <p className="text-[#98abd1] font-light">
                Paul Omugbe's personal account of the conversation that proved
                the model workse.
              </p>
              <Link
                to="/partnership"
                className="flex items-center w-60 gap-2 rounded-lg text-sm font-semibold text-amber-400"
              >
                Read <span>→</span>
              </Link>
            </div>
          </div>
          <div className="bg-[#160e6beb] px-6 py-4 flex gap-2 rounded w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] ">
            <div className="space-y-2">
              <p className="font-semibold text-[13px] text-amber-400 border border-amber-400 rounded-full w-fit px-4 py-1">
                Platform Thinking
              </p>
              <h4 className="font-semibold text-[16px]">
                Curated vs Open: Why Selectivity Is the Real Product
              </h4>
              <p className="text-[#98abd1] font-light">
                Why most platforms get this wrong, and why we chose a different
                path from day one.
              </p>
              <Link
                to="/partnership"
                className="flex items-center w-60 gap-2 rounded-lg text-sm font-semibold text-amber-400"
              >
                Read <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t-2 border-amber-300 rounded-2xl  text-sm hover:-translate-y-2  bg-[#03246b] md:w-195 lg:w-265 h-60 px-3 py-6 space-y-2   transition-all duration-300 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  mt-8 mb-8 flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-3xl text-white font-serif font-bold mb-5 mt-5">
          Stay in the Loop
        </h1>

        <p className="text-[#98abd1] font-light">
          Get the ATC Weekly Deal Flow Digest + Ecosystem Insights
        </p>

        <div>
          <form action="submit">
            <input
              type="email"
              placeholder="Your email address"
              className="py-2 px-4 bg-[#1f57c7] rounded w-70 border border-gray-400"
            />{" "}
            <button className="bg-amber-400 py-2 px-4 rounded hover:bg-amber-300 text-gray-700 font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Insight;
