import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/Notfound";
import { Toaster } from "./components/ui/toaster";

// Handle GitHub Pages SPA routing
if (window.location.search.startsWith('?/')) {
  const path = window.location.search.slice(2);
  window.history.replaceState(null, '', path);
}

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;