import Header from "../Header/Header";
import Nav from "./Nav";
import Footer from "./footer";
import Navbar from "./NavBar";
import Banner from "./banner";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Nav /> */}

      {/* <Banner /> */}

      <Navbar />
      <div className="mb-16"></div>

      {children}
      <div className="mt-16"></div>
      <Footer />
    </>
  );
};
export default Layout;
