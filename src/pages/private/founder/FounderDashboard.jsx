import StatCard from "../../../components/dashboard/StateCard";
import { User, Users, MessageSquare, CalendarDays } from "lucide-react";

function FounderDashboard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6">
      <StatCard
        figure="24"
        title="Profile Views"
        subtitle="↑12% this month"
        subtitleColor="text-green-400"
        icon={User}
      />

      <StatCard
        figure="2"
        title="Intro request"
        subtitle="Action Needed"
        subtitleColor="text-amber-400"
        icon={Users}
      />

      <StatCard
        figure="1"
        title="Upcoming Event"
        subtitle="Tomorrow • 2 PM"
        subtitleColor="text-blue-400"
        icon={MessageSquare}
      />

      <StatCard
        figure="Loading"
        title="Membership Active"
        subtitle="Renews Jan 2026"
        subtitleColor="text-gray-400"
        icon={CalendarDays}
      />
    </div>
  );
}

export default FounderDashboard;
