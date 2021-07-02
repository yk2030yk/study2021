import { useState, useCallback } from "react";

export const useHeaderMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => setIsOpen(false), []);

  const toggle = useCallback(() => setIsOpen((pre) => !pre), []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
