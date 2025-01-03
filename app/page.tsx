import Speaking from "@/components/Speaking";
import ParallaxComponent from "@/components/ParallaxComponent";
import Work from "@/components/Work";
import Music from "@/components/Music";
import Other from "@/components/Other";

export default function Home() {
  return (
    <div>
      <ParallaxComponent />
      <Work />
      <Speaking />
      <Music />
      <Other />
    </div>
  );
}
