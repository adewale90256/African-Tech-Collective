// layouts/PublicLayout.jsx

import { Outlet } from "react-router-dom";
import LandingHeader from "../components/landing/LandingHeader";
import Footer from "../components/footer/Footer";

function PublicLayout() {
  return (
    <>
      <LandingHeader />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default PublicLayout;
