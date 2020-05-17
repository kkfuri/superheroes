import { motion } from "framer-motion";

function Button({ type, className, ...props }) {
  const classNames = [
    "w-full p-4 duration-200 shadow-md rounded-sm bg-transparent border border-primary-light hover:shadow-xl uppercase",
    className,
  ].join(" ");
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={classNames}
      {...props}
    />
  );
}

export default Button;
