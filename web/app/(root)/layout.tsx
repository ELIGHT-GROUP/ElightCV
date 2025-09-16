import FooterElement from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <FooterElement />
    </div>
  );
};

export default MainLayout;
