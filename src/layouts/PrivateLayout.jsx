// layouts/DashboardLayout.jsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function PrivateLayout() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = auth.currentUser;

        if (!currentUser) return;

        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex h-screen bg-[#061A3A]">
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <Sidebar
        userData={userData}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar userData={userData} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet context={{ userData }} />
        </main>
      </div>
    </div>
  );
}

export default PrivateLayout;
