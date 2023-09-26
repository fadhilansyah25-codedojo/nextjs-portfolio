"use client";

import { motion } from "framer-motion";
import React from "react";
import { VscError, VscSend } from "react-icons/vsc";

type ToastContextType = {
  toastOpacity: 1 | 0;
  setToastOpacity: React.Dispatch<
    React.SetStateAction<ToastContextType["toastOpacity"]>
  >;
  setToast: (config: ToastConfig) => void;
  message: ToastConfig["message"];
  typeNotif: ToastConfig["typeNotif"];
};

type ToastConfig = {
  autohide?: boolean;
  delayHide?: number;
  message: string;
  typeNotif?: "success" | "error";
};

const ToastContext = React.createContext<ToastContextType | null>(null);

export const useToast = () => {
  const [toastOpacity, setToastOpacity] = React.useState<1 | 0>(0);
  const [message, setMessage] = React.useState<ToastConfig["message"]>("");
  const [typeNotif, setTypeNotif] =
    React.useState<ToastConfig["typeNotif"]>("success");

  const setToast = ({
    autohide = true,
    delayHide = 5000,
    message,
    typeNotif = "success",
  }: ToastConfig) => {
    setMessage(message);
    setTypeNotif(typeNotif);
    setToastOpacity(1);

    if (autohide) {
      setTimeout(() => {
        setToastOpacity(0);
      }, delayHide);
    }
  };

  return {
    toastOpacity,
    setToastOpacity,
    setToast,
    message,
    typeNotif,
  };
};

export const useToastContext = () => {
  const context = React.useContext(ToastContext);

  if (context === null) {
    throw new Error(
      "useToastContext must be used within a ActiveSectionContextProvider",
    );
  }

  return context;
};

export function ToastContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toastOpacity, setToastOpacity, setToast, message, typeNotif } =
    useToast();

  return (
    <ToastContext.Provider
      value={{
        toastOpacity,
        setToastOpacity,
        setToast,
        message,
        typeNotif,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

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
