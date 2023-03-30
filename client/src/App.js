import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import AdminLogin from "./pages/AdminLogin";
import BooksList from "./pages/BooksList";
import CartPage from "./pages/CartPage";
import AddBook from "./pages/AddBook";
import ListBook from "./pages/ListBook";
import EditBook from "./pages/EditBook";
import NotFound from "./pages/NotFound";
import LogoCloud from "./components/LogoCloud";
import Contact from "./pages/Contact";
import Testimonials from "./components/Testimonials";
import SSS from "./components/SSS";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/bookslist" element={<BooksList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin/addbook" element={<AddBook />} />
        <Route path="/admin/listbook" element={<ListBook />} />
        <Route path="/admin/edit-book/:id" element={<EditBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <LogoCloud />
      <Testimonials />
      {window.location.pathname !== "/admin" && <Newsletter />}
      <Footer />
    </div>
  );
}

export default App;
