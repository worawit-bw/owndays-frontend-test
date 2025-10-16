import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      
      {/* Main Content */}
      <main className="flex-1 bg-white">
        {children}
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;