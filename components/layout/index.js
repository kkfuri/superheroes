import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-primary-light">
      <motion.a
        whileHover={{ scale: 1.2 }}
        target="_blank"
        rel="noopener"
        href="https://github.com/kkfuri/superheroes"
        aria-label="Go to repository"
        className="absolute top-0 right-0 mt-8 mr-8 text-4xl"
      >
        <FaGithub />
      </motion.a>

      <main className="flex flex-col flex-1 h-full">{children}</main>
      <footer className="w-full mt-8 mb-4 text-center">
        <code className="flex flex-row items-center justify-center">
          <span>Made by </span>
          <motion.a
            whileHover={{ y: -4 }}
            target="_blank"
            rel="noopener"
            href="https://github.com/kkfuri"
            aria-label="Go to dev github"
            className="mx-2"
          >
            @kkfuri
          </motion.a>{" "}
          <span>with</span>
          <motion.a
            whileHover={{ y: -4 }}
            target="_blank"
            rel="noopener"
            href="https://nextjs.org/"
            aria-label="Go to nextjs page"
            className="mx-2"
          >
            Next.js
          </motion.a>
        </code>
      </footer>
    </div>
  );
}

export default Layout;
