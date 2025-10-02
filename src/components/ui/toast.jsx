// Simple mock toast components for Toaster
export function ToastProvider({ children }) {
  return <div>{children}</div>;
}

export function Toast({ children }) {
  return <div className="bg-gray-800 text-white p-4 rounded mb-2">{children}</div>;
}

export function ToastTitle({ children }) {
  return <div className="font-bold mb-1">{children}</div>;
}

export function ToastDescription({ children }) {
  return <div className="mb-1">{children}</div>;
}

export function ToastClose() {
  return <button className="ml-2 text-xs">Close</button>;
}

export function ToastViewport() {
  return null;
}
