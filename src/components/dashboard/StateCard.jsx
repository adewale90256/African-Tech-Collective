function StatCard({ title, value, icon: Icon, figure }) {
  return (
    <div className="bg-[#081F44] border border-[#1E3A5F] rounded-2xl p-4 hover:border-blue-500 transition duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-amber-400 font-serif font-semibold text-sm">
            {figure}
          </p>
          <p className="text-gray-400 text-sm">{title}</p>

          <h2 className="text-sm text-white mt-2">{value}</h2>
        </div>

        <div className="w-10 h-10 rounded-xl bg-[#102C5C] flex items-center justify-center">
          <Icon className="text-blue-400" size={20} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
