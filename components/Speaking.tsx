import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials: Array<{
  quote: string;
  name: string;
  designation: string;
  src: string;
}> = [
  {
    quote: "The view from space is breathtaking and humbling.",
    name: "Astronaut",
    designation: "Space Explorer",
    src: "/takkoglov.jpg",
  },
  {
    quote: "The vastness of the universe is a reminder of how small we are.",
    name: "Background",
    designation: "Cosmic Observer",
    src: "/bobler.jpg",
  },
  {
    quote: "The vastness of the universe is a reminder of how small we are.",
    name: "Background",
    designation: "Cosmic Observer",
    src: "/nokios.jpg",
  },
  {
    quote: "The vastness of the universe is a reminder of how small we are.",
    name: "Background",
    designation: "Cosmic Observer",
    src: "/goforit.jpg",
  },
  {
    quote: "The vastness of the universe is a reminder of how small we are.",
    name: "Background",
    designation: "Cosmic Observer",
    src: "/frad.jpg",
  },
];

export default function Speaking() {
  return (
    <div
      id="speaking"
      className="min-h-screen md:min-h-fit w-screen md:py-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#001122] to-[#1E3A8A]"
    >
      <h1 className="p-4 text-4xl text-white">Public speaking</h1>
      <div className="flex w-3/4 flex-row justify-evenly text-center flex-wrap">
        <p className="w-96 py-3">
          I am an experienced public speaker, delivering dozens of talks
          annually. These range from medium to small-scale presentations for
          groups of lawyers, public entities, or developers to keynotes and
          panel discussions at larger conferences.
        </p>
        <p className="w-96 py-3">
          Additionally, I have contributed to several podcasts. You can find an
          overview of some of my talks, panels, and podcast appearances [here].
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
