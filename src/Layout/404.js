import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./404.module.css";

const Error = () => {
  return (
    <section className={classes.page}>
      <div className={classes.grid} />
      <motion.div
        className={`${classes.bgOrb} ${classes.orb1}`}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${classes.bgOrb} ${classes.orb2}`}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${classes.bgOrb} ${classes.orb3}`}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={classes.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div style={{ position: "relative" }}>
          <span className={classes.codeGlow} aria-hidden="true">404</span>
          <motion.h1
            className={classes.code}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 120 }}
          >
            404
          </motion.h1>
        </div>

        <motion.h2
          className={classes.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Page not found
        </motion.h2>

        <motion.p
          className={classes.desc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        <motion.div
          className={classes.actions}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/" className={classes.btnHome}>
            Back to Home
          </Link>
          <Link to="/contact-us" className={classes.btnContact}>
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Error;
