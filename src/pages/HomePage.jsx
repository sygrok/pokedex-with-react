import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
