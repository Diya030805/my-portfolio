import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/Notfound";
import { Toaster } from "./components/ui/toaster";

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