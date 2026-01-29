import React, { createContext, useState, useEffect } from "react";

export const ClosetContext = createContext();

export function ClosetProvider({ children }) {
  const [closet, setCloset] = useState([]);

  // Load closet from localStorage when app starts
  useEffect(() => {
    const saved = localStorage.getItem("closet");
    if (saved) setCloset(JSON.parse(saved));
  }, []);

  // Save closet whenever updated
  useEffect(() => {
    localStorage.setItem("closet", JSON.stringify(closet));
  }, [closet]);

  const addToCloset = (item) => {
    setCloset((prev) => [...prev, item]);
  };

  const removeFromCloset = (id) => {
    setCloset((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ClosetContext.Provider
      value={{ closet, addToCloset, removeFromCloset }}
    >
      {children}
    </ClosetContext.Provider>
  );
}