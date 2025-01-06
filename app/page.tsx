import Speaking from "@/components/Speaking";
import ParallaxComponent from "@/components/ParallaxComponent";
import Work from "@/components/Work";
import Music from "@/components/Music";
import Other from "@/components/Other";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ParallaxComponent />
      <Work />
      <Speaking />
      <Music />
      <Other />
    </div>
  );
}
