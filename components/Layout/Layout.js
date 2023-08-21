import Header from "../Header/Header";
import Nav from "./Nav";
import Footer from "./footer";
import Navbar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Nav /> */}

      <Navbar />
      <div className="mb-16"></div>

      {children}
      <div className="mt-16"></div>
      <Footer />
    </>
  );
};
export default Layout;
