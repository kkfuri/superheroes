function Input({ label, name, className, ...props }) {
  const classNames = [
    "w-full p-4 duration-200 rounded-sm bg-transparent border border-primary-light focus:border-primary-dark placeholder-primary text-center",
    className,
  ].join(" ");
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} name={name} className={classNames} {...props} />
    </>
  );
}

export default Input;
