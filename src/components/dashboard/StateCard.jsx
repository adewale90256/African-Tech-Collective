function StatCard({
  figure,
  title,
  subtitle,
  subtitleColor = "text-gray-400",
  icon: Icon,
}) {
  return (
    <div className="bg-[#081F44] border border-[#1E3A5F] rounded-2xl p-4 hover:border-blue-500 transition duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-amber-400 font-serif font-semibold text-sm">
            {figure}
          </p>

          <p className="text-[#98abd1] font-extralight text-[13px] text-sm">
            {title}
          </p>

          <h2
            className={`text-sm text-[10px] font-extralight mt-2 ${subtitleColor}`}
          >
            {subtitle}
          </h2>
        </div>

        <div className="w-10 h-10 rounded-xl bg-[#102C5C] flex items-center justify-center">
          <Icon className="text-blue-400" size={20} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
