const getColor = (val) =>
  ({
    [val >= 0]: { bg: "bg-red-400", text: "text-red-400" },
    [val >= 20]: { bg: "bg-red-600", text: "text-red-600" },
    [val >= 40]: { bg: "bg-yellow-600", text: "text-yellow-600" },
    [val >= 60]: { bg: "bg-green-500", text: "text-green-500" },
    [val >= 80]: { bg: "bg-blue-500", text: "text-blue-500" },
  }[true] || { bg: "bg-gray-700", text: "text-gray-700" });

const StatInfo = ({ title, value }) => {
  if (value === "null") return <span />;
  const color = getColor(value);
  return (
    <span className="flex items-center py-2 capitalize">
      <p className="inline-block w-full mr-4">{title}</p>
      <p className="flex items-center flex-1 text-left">
        <div className={`p-1 mr-2 rounded-full ${color.bg}`} />
        <strong className={color.text}>{value}</strong>
      </p>
    </span>
  );
};

export default StatInfo;
