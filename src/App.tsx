import { Route, Routes } from "react-router-dom";
import BusinessListPage from "./pages/BusinessListPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import BusinessDetailsPage from "./pages/BusinessDetailsPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/businesses" element={<BusinessListPage />} />
        <Route path="/business/:id" element={<BusinessDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
