"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface BurgerContextProps {
  isopen: boolean;
  toggle: () => void;
}

const BurgerMenuContext = createContext<BurgerContextProps | undefined>(
  undefined
);

export const useBurgerMenuContext = () => {
  const context = useContext(BurgerMenuContext);

  if (!context) {
    throw new Error("useBurgerContext must be used within a BurgerProvider");
  }
  return context;
};

interface BurgerMenuProviderProps {
  children: ReactNode;
}

export const BurgerMenuProvider: React.FC<BurgerMenuProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <BurgerMenuContext.Provider value={{ isopen: isOpen, toggle }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};
