function Button({ type, className, ...props }) {
  const classNames = [
    "w-full p-4 shadow-sm duration-200 rounded-sm bg-transparent border border-primary-light hover:shadow-lg uppercase",
    className,
  ].join(" ");
  return <button type={type} className={classNames} {...props} />;
}

export default Button;
