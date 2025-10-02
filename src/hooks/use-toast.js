import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);
  return {
    toasts,
    toast: ({ title, description }) => {
      alert(`${title}\n${description}`);
      setToasts((prev) => [
        ...prev,
        { id: Date.now(), title, description }
      ]);
    }
  };
}
