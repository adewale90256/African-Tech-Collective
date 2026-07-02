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
import Events from "./pages/public/Events";
import EventsForm from "./components/events/EventsForm";
import ApplyNow from "./pages/public/ApplyNow";
import Menbership from "./pages/public/Menbership";
import Insight from "./pages/public/Insight";
import Login from "./pages/public/Login";

// Private Pages
import FounderDashboard from "./pages/private/FounderDashboard";
import InvestorDashboard from "./pages/private/InvestorDashboard";

function App() {
  return (
    <Routes>
      {/** Public Routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="platform" element={<Platform />} />
        <Route path="events" element={<Events />} />
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
        <Route path="/founder/dashboard" element={<FounderDashboard />} />

        <Route path="/investor/dashboard" element={<InvestorDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
