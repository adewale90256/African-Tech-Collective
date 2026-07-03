// App.jsx

import { Routes, Route } from "react-router-dom";

// LAYOUT
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import ProtectedRoute from "./components/routes/ProtectedRoute";

// Public PAages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Platform from "./pages/public/Platform";
import Event from "./pages/public/Event";
import EventsForm from "./components/events/EventsForm";
import ApplyNow from "./pages/public/ApplyNow";
import Menbership from "./pages/public/Menbership";
import Insight from "./pages/public/Insight";
import Login from "./pages/public/Login";

// Private Pages
// Founder pages
import FounderDashboard from "./pages/private/founder/FounderDashboard";
import FounderProfile from "./pages/private/founder/Profile";
import FounderDealFlow from "./pages/private/founder/DealFlow";
import FounderEvents from "./pages/private/founder/Events";
import FounderMessage from "./pages/private/founder/Message";
import FounderCommunity from "./pages/private/founder/Community";
import FounderSettings from "./pages/private/founder/Settings";

// INvestor pages
import InvestorDashboard from "./pages/private/investor/InvestorDashboard";
import InvestorProfile from "./pages/private/investor/Profile";
import InvestorDealFlow from "./pages/private/investor/DealFlow";
import InvestorSearchFounder from "./pages/private/investor/SearchFounders";
import InvestorEvents from "./pages/private/investor/Events";
import InvestorMessage from "./pages/private/investor/Message";
import InvestorPipelinerTracker from "./pages/private/investor/PiplelineTracker";
import InvestorSettings from "./pages/private/investor/Settings";

function App() {
  return (
    <Routes>
      {/** Public Routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="platform" element={<Platform />} />
        <Route path="events" element={<Event />} />
        <Route path="form" element={<EventsForm />} />
        <Route path="apply" element={<ApplyNow />} />
        <Route path="membership" element={<Menbership />} />
        <Route path="insights" element={<Insight />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/** Privte Routes */}
      {/* PRIVATE */}
      <Route
        element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>
        }
      >
        {/**Founder */}
        <Route path="/founder/dashboard" element={<FounderDashboard />} />
        <Route path="/founder/dashboard" element={<FounderDashboard />} />
        <Route path="/founder/profile" element={<FounderProfile />} />
        <Route path="/founder/deal-flow" element={<FounderDealFlow />} />
        <Route path="/founder/events" element={<FounderEvents />} />
        <Route path="/founder/messages" element={<FounderMessage />} />
        <Route path="/founder/community" element={<FounderCommunity />} />
        <Route path="/founder/settings" element={<FounderSettings />} />

        {/**Investor */}
        <Route path="/investor/dashboard" element={<InvestorDashboard />} />
        <Route path="/investor/dashboard" element={<InvestorDashboard />} />
        <Route path="/investor/profile" element={<InvestorProfile />} />
        <Route path="/investor/deal-flow" element={<InvestorDealFlow />} />
        <Route
          path="/investor/search-founders"
          element={<InvestorSearchFounder />}
        />
        <Route path="/investor/events" element={<InvestorEvents />} />
        <Route path="/investor/messages" element={<InvestorMessage />} />
        <Route
          path="/investor/pipeline"
          element={<InvestorPipelinerTracker />}
        />
        <Route path="/investor/settings" element={<InvestorSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
