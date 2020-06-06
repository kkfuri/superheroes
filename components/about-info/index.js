const AboutInfo = ({ title, value }) => {
  if (value === "null") return <span />;
  return typeof value === "string" ? (
    <li>
      {title}: <strong>{value}</strong>
    </li>
  ) : (
    <li>
      {title}:
      <strong className="divide-x divide-gray-400">
        {value?.map((i) => (
          <span className="px-2">{i}</span>
        ))}
      </strong>
    </li>
  );
};

export default AboutInfo;
