import StatCard from "../../../components/dashboard/StateCard";
import { User, Users, MessageSquare, CalendarDays } from "lucide-react";

function FounderDashboard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6">
      <StatCard figure="24" title="Profile views" value="12" icon={User} />

      <StatCard
        figure="2"
        title="Intro request"
        value="Action needed"
        icon={Users}
      />

      <StatCard figure="1" title="Upcoming Event" icon={MessageSquare} />

      <StatCard
        figure="Pro"
        title="Member Active Renews...."
        icon={CalendarDays}
      />
    </div>
  );
}

export default FounderDashboard;
