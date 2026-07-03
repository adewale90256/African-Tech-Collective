import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="bg-[#091839] flex flex-col gap-5 h-full text-white p-8">
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-serif mb-4 text-[20px] font-semibold">Events</h1>
        <p className="text-[#98abd1] mb-10 text-center">
          Every ATC event is curated. Attendance is application based or invite
          only. Capacity is deliberately limited.
        </p>

        <div className=" flex flex-col md:flex-row gap-4">
          <div className="bg-[#082a72] p-4 border-t-2 border-amber-400 rounded md:w-56 lg:w-80 space-y-5 shadow-lg  hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-[18px] font-semibold">
              Golf Networking Events
            </h3>
            <p className="text-[#98abd1] text-sm leading-6">
              Private sessions at Lagos club venues Ikoyi Club, Lagos Golf Club.
              Limited to 12-20 HNIs and 8-12 pre-qualified founders. 4+ hours of
              unstructured relationship time. Application based attendance.
            </p>

            <span className="text-amber-300">₦75,000 - ₦250,000</span>
          </div>
          <div className="bg-[#082a72] p-4 border-t-2 border-amber-400 rounded md:w-56 lg:w-80 space-y-5 shadow-lg  hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-[18px] font-semibold">
              Investor-Founder Dinners
            </h3>
            <p className="text-[#98abd1] text-sm leading-6">
              Intimate roundtable dinners, 10-15 participants. Structured
              facilitated conversation. Named founders present to verified
              investors in a private setting.
            </p>

            <span className="text-amber-300">₦50,000 - ₦150,000</span>
          </div>
          <div className="bg-[#082a72] p-4 border-t-2 border-amber-400 rounded md:w-56 lg:w-80 space-y-5 shadow-lg  hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)] hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-[18px] font-semibold">Annual Golf Summit</h3>
            <p className="text-[#98abd1] text-sm leading-6">
              (Year 3 Target) Flagship annual event. 100+ attendees. 20+
              verified investors. Multi-city, multi-day format. Pan-African
              scale. The defining event in the African startup investment
              calendar.
            </p>

            <span className="text-amber-300">TBA</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center ">
        <h1 className="font-serif mb-4 text-[20px] font-semibold">
          UpComing Events
        </h1>
      </section>

      <div className="mt-8">
        <Link to="/form">
          <button className="bg-amber-400 px-8 py-3 rounded">Add Event</button>
        </Link>
      </div>
    </div>
  );
}

export default Events;
