import { Route, Routes } from "react-router-dom";
import BusinessesPage from "./pages/BusinessesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import BusinessDetailsPage from "./pages/BusinessDetailsPage";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
