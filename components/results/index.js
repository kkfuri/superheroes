import { motion } from "framer-motion";
import ListItem from "../list-item";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function Results({ list }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4"
    >
      {list.map((item) => (
        <motion.div key={item.id} variants={itemMotion}>
          <ListItem item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Results;
