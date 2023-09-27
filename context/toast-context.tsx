"use client";

import React from "react";

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
  } as const;
};

/**
 * provide context for controlling toast component
 */
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

/**
 * return state for controlling toast component
 */
export const useToastContext = () => {
  const context = React.useContext(ToastContext);

  if (context === null) {
    throw new Error(
      "useToastContext must be used within a ActiveSectionContextProvider",
    );
  }

  return context;
};
