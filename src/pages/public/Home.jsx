import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="bg-[#091839] text-white min-h-screen flex flex-col items-center pb-10">
      <section className="">
        <div className="flex flex-col justify-center items-center p-5 mt-8">
          <div>
            {/*<img
              src="public/logo/AFRICAN TECH COLLECTIVE logo-12.png"
              alt=""
              className="w-70 h-70"
            />*/}

            <p className=" text-amber-400 text-center mb-10">
              Lagos, Nigeria · EST. 2024
            </p>
          </div>

          <div className="flex flex-col justify-center items-center px-6 py-10">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-serif max-w-4xl mb-6 leading-tight">
              Africa's Most Trusted Platform for Founder - Investment Access.
            </h1>

            <p className="text-center text-sm sm:text-base max-w-2xl leading-relaxed text-[#98abd1]">
              African Tech Collective connects exceptional African founders with
              HNIs, family offices, and institutional investors positioned to
              back them through curated community, high-trust golf events, and a
              world-class digital platform.
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className=" flex flex-col items-center justify-center gap-4 ">
          <div className="flex justify-between items-center  gap-5">
            <Link
              to="/membership?role=founder"
              className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] transition hover:bg-amber-300"
            >
              Apply as Founder
            </Link>

            <Link
              to="/membership?role=investor"
              className="flex items-center justify-center rounded-lg border border-amber-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-400 hover:text-[#041B4A]"
            >
              Join as Investor <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <ChevronDown className="animate-bounce [animation-duration:1s] text-center text-amber-400 mt-10" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#112653] w-full font-serif gap-8 p-8 mt-20 border-t-[0.5px] border-b-[0.5px] border-gray-600 lg:h-50 mb-10 ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-amber-400 text-2xl font-bold">100+</p>
          <p className="text-sm font-sans  text-[#98abd1]">Curated Founders</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-amber-400 text-2xl font-bold">20+</p>
          <p className="text-sm font-sans  text-[#98abd1]">
            Verified Investors
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-amber-400 text-2xl font-bold">₦5M+</p>
          <p className="text-sm font-sans  text-[#98abd1]">Y1 Revenue Target</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-amber-400 text-2xl font-bold">
            Lagos → Pan-Africa
          </p>
          <p className="text-sm font-sans  text-[#98abd1]">Expansion Roadmap</p>
        </div>
      </section>

      <section className="px-5">
        <div className="flex flex-col lg:flex-row justify-center items-stretch mt-10 gap-5  border-t-[0.5px] border-b-[0.5px] border-gray-600 py-10">
          <div className="lg:w-120 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-l-[3px] border-amber-300 rounded-2xl ">
            <div className=" p-5 space-y-5">
              <p className="font-semibold text-[13px] text-amber-400">
                THE GAP
              </p>
              <h1 className="text-[20px] font-serif">Access is Broken</h1>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400">✓</span> African tech talent is
                scattered and invisible in global capital markets.
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400">✓</span> Investors cannot find
                credible, pre-vetted founders without noise.
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400">✓</span> Existing platforms are
                open, shallow, and transactional.
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400">✓</span> No structured,
                high-trust institution bridges the gap consistently.
              </p>
            </div>
          </div>
          <div className="lg:w-120 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-l-[3px] border-amber-300 rounded-2xl">
            <div className=" p-5 space-y-5">
              <p className="font-semibold text-[13px] text-amber-400">
                THE FIX
              </p>
              <h1 className="text-[20px] font-serif">
                We Build the Infrastructure
              </h1>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400">✓</span> We curate both sides
                every founder and investor is reviewed and approved.
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400">✓</span>Golf events create 4+
                hours of genuine relationship time before any transaction.
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400">✓</span> A digital platform
                makes curated deal flow scalable and measurable.
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400">✓</span> One trusted
                intermediary does the selection, qualification, and
                facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 px-5">
        <div className="flex - flex-col justify-center items-center gap-5">
          <p className="text-[13px]  font-semibold text-amber-400 mb-3">
            How We Work
          </p>
          <h1 className="text-[40px] font-semibold font-serif">
            Three Pillars. One Platform.
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-5">
            <div className="border-t-2 border-amber-300 rounded-2xl text-center text-sm hover:translate-y-2  bg-[#03246b] lg:w-80 p-10 space-y-5   transition-all duration-300 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  ">
              <span className="text-[30px] mt-3">⟁</span>
              <p className="text-amber-400 font-semibold text-[20px]">
                Curated Community
              </p>
              <p className="text-[#98abd1]">
                We are not open to everyone. Every founder and investor on the
                platform has been reviewed and approved. Selectivity is not a
                feature it is the product.
              </p>
            </div>
            <div className="border-t-2 border-amber-300 rounded-2xl text-center text-sm hover:translate-y-2  bg-[#03246b] lg:w-80 p-10 space-y-5   transition-all duration-300 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  ">
              <span className="text-[30px] mt-3">⛳</span>
              <p className="text-amber-400 font-semibold text-[20px]">
                The Golf Advantage
              </p>
              <p className="text-[#98abd1]">
                Golf is not recreation it is relationship infrastructure.
                Private golf events at Lagos club venues create the depth of
                connection that accelerates investment decisions. We are the
                first ecosystem platform in Africa to deploy this channel at
                scale..
              </p>
            </div>
            <div className="border-t-2 border-amber-300 rounded-2xl text-center text-sm hover:translate-y-2  bg-[#03246b] lg:w-80 p-10 space-y-5   transition-all duration-300 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  ">
              <span className="text-[30px] mt-3">⬡</span>
              <p className="text-amber-400 font-semibold text-[20px]">
                Digital Deal Flow
              </p>
              <p className="text-[#98abd1]">
                The platform converts offline relationships into structured,
                scalable deal flow. Founder profiles, investor dashboards,
                introduction requests, and event management all in one curated
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 bg-[#112653] w-full lg:h-fit py-8">
        <div className="flex  flex-col justify-center items-center gap-5">
          <h1 className="text-[35px] text-sm text-center font-semibold font-serif">
            Three Steps to Connection.
          </h1>

          <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center px-5 gap-5">
            <div className="flex flex-col justify-center items-center  gap-4 lg:w-80 mb-5">
              <span className="bg-amber-300 rounded-full p-4 font-serif font-semibold text-[#112653]">
                01
              </span>
              <p className="font-serif font-semibold text-[17px]">Apply</p>
              <p className="text-center text-[#98abd1]">
                Founders and investors submit structured applications. We review
                every application personally. Only qualified members are
                admitted.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  gap-4 lg:w-80 mb-5">
              <span className="bg-amber-300 rounded-full p-4 font-serif font-semibold text-[#112653]">
                02
              </span>
              <p className="font-serif font-semibold text-[17px]">Connect</p>
              <p className="text-center text-[#98abd1]">
                Members attend curated golf events and investor-founder dinners
                where genuine, relationship-level connections are built not
                business card exchanges.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  gap-4 lg:w-80 mb-5">
              <span className="bg-amber-300 rounded-full p-4 font-serif font-semibold text-[#112653]">
                03
              </span>
              <p className="font-serif font-semibold text-[17px]">Transact</p>
              <p className="text-center text-[#98abd1]">
                The platform facilitates introductions, tracks deal flow
                engagement, and manages the relationship from first interaction
                to investment close.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-5 h-full w-full flex flex-col justify-center items-center ">
        <h1 className="text-2xl  font-semibold font-serif mb-8 lg:text-[35px]">
          Built for Two Audiences. Curated for Both.
        </h1>
        <div className="h-full flex flex-col md:flex-row lg:flex-row justify-center items-stretch gap-5">
          <div className="flex flex-col  lg:w-125 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-t-[3px] border-amber-400 rounded-2xl p-4 ">
            <p className="font-semibold text-[13px] text-amber-400 mb-5">
              Founders
            </p>
            <h1 className="font-semibold font-serif fo text-[17px] w-80 mb-5 lg:text-[19px]">
              Get Investor Access You Cannot Find Anywhere Else
            </h1>

            <div className="space-y-5 mb-15">
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>{" "}
                African Access to a curated network of HNIs and institutional
                investors
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Golf events that create relationship-depth access not just
                introductions
              </p>
              <p className="text-[#98abd1] text-sm ">
                <span className="text-amber-400 font-semibold mr-2">✓</span> A
                professional digital profile visible to verified investors only
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                No Mentorship, peer learning, and investor readiness support
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Deal structuring guidance from the ATC team
              </p>
            </div>

            <Link
              to="/membership?role=founder"
              className="rounded-lg w-40 bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] transition hover:bg-amber-300"
            >
              Apply as Founder
            </Link>
          </div>
          <div className="flex flex-col lg:w-125 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-t-[3px] border-amber-400 rounded-2xl p-4 ">
            <p className="font-semibold text-[13px] text-amber-400 mb-5">
              Investors & HNIs
            </p>
            <h1 className="font-semibold font-serif fo text-[17px] w-80 mb-5 lg:text-[19px]">
              A Pre-Qualified Pipeline With No Noise
            </h1>

            <div className="space-y-5 mb-15">
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Pre-vetted, investment-ready African founders curated, not crowd
                sourced
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>
                Private golf events that build real relationships before any
                commitment
              </p>
              <p className="text-[#98abd1] text-sm ">
                <span className="text-amber-400 font-semibold mr-2">✓</span> A
                Deal flow dashboard filter, track, and engage at your own pace
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span>A
                trusted intermediary that has done all the selection and
                qualification work
              </p>
              <p className="text-[#98abd1] text-sm">
                <span className="text-amber-400 font-semibold mr-2">✓</span> No
                Exclusive membership with tiered access to events, programmes,
                and advisory
              </p>
            </div>

            <Link
              to="/membership?role=investor"
              className="w-45 flex items-center justify-center rounded-lg border border-amber-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-400 hover:text-[#041B4A]"
            >
              Join as Investor <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full h-full lg:h-70 p-5 bg-[#112653] flex justify-center items-center flex-col md:flex-row lg:flex-row gap-5">
        <div className="lg:w-80 md:w-70 w-100%  flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-l-[3px] border-amber-300 rounded-2xl py-6 px-4 space-y-2">
          <p className="font-serif">
            "African Tech Collective gave me direct access to investors I had
            been trying to reach for two years."
          </p>
          <p className="text-amber-400 text-sm">✓ Founder Member, Fintech</p>
        </div>
        <div className="lg:w-80 md:w-70 w-100% transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-l-[3px] border-amber-300 rounded-2xl py-6 px-4 space-y-2">
          <p className="font-serif">
            "The curation model is exactly what was missing. Every founder I've
            met through ATC has been serious."
          </p>
          <p className="text-amber-400 text-sm">✓ HNI Investor Member, Lagos</p>
        </div>
        <div className="lg:w-80 md:w-70 w-100% transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]  bg-[#03246b] border-l-[3px] border-amber-300 rounded-2xl py-6 px-4 space-y-2">
          <p className="font-serif">
            "The golf format removes all the formality. You get to know a person
            in four hours. That changes everything."
          </p>
          <p className="text-amber-400 text-sm">✓ Angel Investor, ATC Member</p>
        </div>
      </section>

      <section className="bg-amber-400 w-full lg:h-80 md:h-80 flex flex-col justify-center items-center">
        <h1 className="text-center font-semibold font-serif mb-6 text-[#041B4A] text-[30px] lg:w-120 text-sm md:text-[29px] md:font-light lg:font-bold">
          Ready to Join Africa's Most Curated Founder-Investor Network?
        </h1>
        <Link
          to="/login"
          className="w-45 bg-[#041B4A] flex items-center justify-center rounded-lg border border-amber-400 px-6 py-3 text-sm font-semibold text-white transition "
        >
          Get Started <ArrowRight size={20} className="ml-2" />
        </Link>
      </section>
    </div>
  );
}

export default Home;
