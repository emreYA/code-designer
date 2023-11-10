import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "Over mij", "Portfolio", "Contact"];

  return (
    <motion.div
      className="links absolute w-full h-full flex flex-col items-start ml-9 justify-center gap-5 text-lg md:text-3xl"
      variants={variants}
    >
      {items.map((item, i) => (
        <motion.a
          href={`#${item}`}
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
