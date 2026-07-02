function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#091839] flex flex-col items-center justify-center">
      {/* Logo */}
      <img
        src="/logo/AFRICAN TECH COLLECTIVE logo-12.png"
        alt="African Tech Collective"
        className="h-16 w-auto"
      />

      {/* Title */}
      <h1 className="text-white text-3xl font-serif font-bold">
        African Tech Collective
      </h1>

      <p className="text-[#98abd1] mt-2">
        Connecting African Innovation with Global Capital
      </p>

      {/* Spinner */}
      <div className="mt-10 h-10 w-10 rounded-full border-4 border-amber-300 border-t-transparent animate-spin"></div>
    </div>
  );
}

export default LoadingScreen;
