/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // CHANGED: once is now false, so it animates every time you scroll!
      viewport={{ once: false, margin: "-50px" }} 
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // CHANGED: once is now false
      viewport={{ once: false, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      // CHANGED: once is now false
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}