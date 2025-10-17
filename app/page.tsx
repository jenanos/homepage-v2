import Speaking from "@/components/Speaking";
import ParallaxComponent from "@/components/ParallaxComponent";
import Work from "@/components/Work";
import Music from "@/components/Music";
import Other from "@/components/Other";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ParallaxComponent />
        <Work />
        <Speaking />
        <Music />
        <Other />
      </main>
      <Footer />
    </>
  );
}
