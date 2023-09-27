"use client";

import React from "react";
import { motion } from "framer-motion";
import { VscError, VscSend } from "react-icons/vsc";
import { useToastContext } from "@/context/toast-context";

export default function Toast() {
  const { toastOpacity, message, typeNotif } = useToastContext();
  return (
    <motion.div
      id="toast-simple"
      className="space-x fixed bottom-5 right-5 z-50 hidden w-full 
      max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-md bg-white 
      p-4 text-gray-500 shadow dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
      role="alert"
      animate={{
        opacity: toastOpacity,
        y: toastOpacity ? 0 : 200,
        display: toastOpacity ? "flex" : "hidden",
      }}
    >
      <div>
        {typeNotif === "success" ? (
          <VscSend className="text-lg text-blue-600" />
        ) : (
          <VscError className="text-xl font-bold text-red-500" />
        )}
      </div>
      <div className="pl-4 text-sm font-normal">{message}</div>
    </motion.div>
  );
}
