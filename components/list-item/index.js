import { motion } from "framer-motion";

function ListItem({ item }) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="p-4 mx-auto duration-150 border border-gray-200 rounded-lg shadow-xl cursor-pointer group hover:shadow-2xl hover:border-primary"
    >
      <h1 className="mb-2 text-2xl font-normal text-center duration-300 font-body group-hover:text-primary">
        {item.name}
      </h1>
      <div
        className="overflow-hidden rounded-sm shadow-md"
        style={{ width: 240, height: 320 }}
      >
        <img
          className="object-cover"
          src={item.image.url}
          width={240}
          height={320}
        />
      </div>
    </motion.article>
  );
}

export default ListItem;
