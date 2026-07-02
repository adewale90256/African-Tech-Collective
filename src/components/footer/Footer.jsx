import { Link } from "react-router-dom";
//mport { Twitter, Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#041B4A] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
        <div className="flex flex-col md:flex-row md:justify-evenly md:items-center gap-5">
          {/* Logo Section */}
          <div>
            {/*<img
              src="public/logo/AFRICAN TECH COLLECTIVE logo-12.png"
              alt=""
              className="w-30 h-30"
            />*/}

            <p className="mt-6 text-gray-300">
              Where African Tech Talent Meets Capital
            </p>

            <div className="mt-6 text-gray-400 text-sm space-y-2">
              <p>© 2025 African Tech Collective Limited</p>
              <p>RC: 7847219 · Lagos, Nigeria</p>
            </div>
          </div>

          {/* Platform */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-amber-400 font-semibold tracking-wider uppercase mb-5">
                Platform
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/platform">Platform</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/membership">Membership</Link>
                </li>
                <li>
                  <Link to="/insights">Insights</Link>
                </li>
              </ul>
            </div>

            {/* Join */}
            <div>
              <h3 className="text-amber-400 font-semibold tracking-wider uppercase mb-5">
                Join
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/apply-founder">Apply as Founder</Link>
                </li>
                <li>
                  <Link to="/apply-investor">Apply as Investor</Link>
                </li>
                <li>
                  <Link to="/partnerships">Corporate Partnerships</Link>
                </li>
                <li>
                  <Link to="/login">Login to Platform</Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-amber-400 font-semibold tracking-wider uppercase mb-5">
                Legal
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/cookies">Cookie Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>

              <div className="flex items-center gap-4 mt-8">
                {/*<LinkedIn size={20} className="text-amber-400* cursor-pointer" />*
              <Twitter size={20} className="text-amber-400 cursor-pointer" />
              <Play size={20} clas//sName="text-amber-400 cursor-pointer" />*/}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-sm text-gray-400">
            African Tech Collective Limited · RC: 7847219 · Registered in
            Nigeria · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
