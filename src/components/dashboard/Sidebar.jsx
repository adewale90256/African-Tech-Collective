import {
  LayoutDashboard,
  User,
  BriefcaseBusiness,
  CalendarDays,
  MessageSquare,
  Users,
  Search,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar({ userData, sidebarOpen, setSidebarOpen }) {
  const founderLinks = [
    {
      section: "MAIN",
      links: [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/founder/dashboard",
        },
        {
          name: "My Profile",
          icon: User,
          path: "/founder/profile",
        },
        {
          name: "Deal Flow",
          icon: BriefcaseBusiness,
          path: "/founder/deal-flow",
        },
        {
          name: "Events",
          icon: CalendarDays,
          path: "/founder/events",
        },
      ],
    },

    {
      section: "COMMUNICATION",
      links: [
        {
          name: "Messages",
          icon: MessageSquare,
          path: "/founder/messages",
        },
        {
          name: "Community",
          icon: Users,
          path: "/founder/community",
        },
      ],
    },

    {
      section: "SYSTEM",
      links: [
        {
          name: "Settings",
          icon: Settings,
          path: "/founder/settings",
        },
      ],
    },
  ];
  const investorLinks = [
    {
      section: "MAIN",
      links: [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/investor/dashboard",
        },
        {
          name: "My Profile",
          icon: User,
          path: "/investor/profile",
        },
        {
          name: "Deal Flow",
          icon: BriefcaseBusiness,
          path: "/investor/deal-flow",
        },
        {
          name: "Search Founders",
          icon: Search,
          path: "/investor/search-founders",
        },
        {
          name: "Events",
          icon: CalendarDays,
          path: "/investor/events",
        },
      ],
    },

    {
      section: "COMMUNICATION",
      links: [
        {
          name: "Messages",
          icon: MessageSquare,
          path: "/investor/messages",
        },
        {
          name: "Pipeline Tracker",
          icon: Users,
          path: "/investor/pipeline",
        },
      ],
    },

    {
      section: "SYSTEM",
      links: [
        {
          name: "Settings",
          icon: Settings,
          path: "/investor/settings",
        },
      ],
    },
  ];

  const links = userData?.role === "founder" ? founderLinks : investorLinks;

  return (
    <aside
      className={`fixed lg:static top-0 left-0 z-50 h-full w-55 bg-[#081F44] border-r border-[#1E3A5F] flex flex-col transform transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex h-20 items-center justify-between px-6 py-4 border-b border-[#1E3A5F]">
        <img
          src="/logo/AFRICAN TECH COLLECTIVE logo-12.png"
          alt="African Tech Collective"
          className="h-16 w-auto"
        />

        {/* Mobile Close Button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-lg hover:bg-[#102C5C] transition"
        >
          <X size={22} className="text-white" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 py-6">
        {links.map((group) => (
          <div key={group.section} className="mb-8">
            <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">
              {group.section}
            </h2>

            <div className="space-y-2">
              {group.links.map((link) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 w-full px-3 py-2 rounded-lg transition ${isActive ? "bg-[#0F2B5B] text-white" : "text-gray-300 hover:bg-[#0F2B5B] hover:text-white"}`
                    }
                  >
                    <Icon size={20} />
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-[#1E3A5F] p-6">
        <div className="mb-4">
          <h3 className="text-white font-semibold">
            {userData?.fullName || "Loading..."}
          </h3>

          <p className="text-sm text-gray-400 capitalize">{userData?.role}</p>
        </div>
        <button className="flex items-center gap-3 text-red-400 hover:text-red-300 transition">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
