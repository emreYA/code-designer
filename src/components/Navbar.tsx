"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div id="Home" className="h-28">
      {/* Sidebar */}
      <Sidebar />
      <div className="h-full md:justify-center items-center flex m-auto max-w-5xl p-5 justify-end">
        <motion.h2
          className="flex flex-row gap-2 items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/logo-new.png" alt="logo" width={50} height={50} />
          Code Designer
        </motion.h2>
      </div>
    </div>
  );
};

export default Navbar;
