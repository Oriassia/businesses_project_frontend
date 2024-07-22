import { Route, Routes } from "react-router-dom";
import BusinessesPage from "./pages/BusinessesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/costum/Navbar";
import BusinessDetailsPage from "./pages/BusinessDetailsPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        <Route path="/business/:id" element={<BusinessDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
