import HeroSection from "../components/HeroSection/index.jsx";
import BestSellers from "../components/Bestsellers/index.jsx";
import NewArrivals from "../components/NewArrivals/index.jsx";
import Footer from "../components/Footer/index.jsx";
import FeatureProduct from "../components/Featured/index.jsx";
function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection
        heroTitle="FurniMad - Amara for Stylish Living"
        heroSubtitle="Discover a fusion of modern and functionality, crafted to elevate every corner of your living space. FurniMad, redefining the way you live."
      />
      <BestSellers />
      <NewArrivals />
      <FeatureProduct />
      <Footer>© 2023 FurniMad. All rights reserved</Footer>
    </div>
  );
}

export default HomePage;
