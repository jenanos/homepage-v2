import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials: Array<{
  quote: string;
  name: string;
  src: string;
  link: string;
}> = [
    {
      quote: "Guest on Anine Kierulf's podcast discussing artificial intelligence (AI) and large language models (LLMs)",
      name: "Takk og Lov",
      src: "/takkoglov.jpg",
      link: "https://shows.acast.com/takk-og-lov-med-anine-kierulf/episodes/om-kunstig-intelligens-og-ekte-myggkjaerlighet-med-jens-andr",
    },
    {
      quote: "Guest on Bouvet's podcast exploring the EU AI Regulation, alongside Eva Jarbekk, moderated by Simen Sommerfeldt.",
      name: "Bouvet Bobler",
      src: "/bobler.jpg",
      link: "https://www.bouvet.no/podcasts/KI-forordningen",
    },
    {
      quote: "Panel discussion on Schrems II, featuring Line Coll and Dag Schartum, moderated by Silje Nordnes.",
      name: "Nokios",
      src: "/nokios.jpg",
      link: "https://youtu.be/EvIIeo8pfiU?si=IU6gSDQ6Jx7kqEdI&t=1490",
    },
    {
      quote: "Keynote speaker on the main stage at GoForIT's conference, focusing on generative AI in the public sector.",
      name: "Generative AI in the Public Sector",
      src: "/goforit.jpg",
      link: "https://tankesmiengoforit.no/2024/03/13/dagen-da-generativ-ki-skjot-fart-i-offentlig-sektor/",
    },
    {
      quote: "Guest on the Research Council of Norway's podcast, discussing AI with Inga Strümke, moderated by Olaug Råd.",
      name: "Research Council of Norway",
      src: "/frad.jpg",
      link: "https://youtu.be/eZKFktL2f0w?si=rsnlmyo_5g7hojJz",
    },
  ];

export default function Speaking() {
  return (
    <div
      id="speaking"
      className="min-h-screen md:min-h-fit w-screen pb-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#001122] to-[#1E3A8A]"
    >
      <h1 className="p-4 text-4xl text-white">Public speaking</h1>
      <div className="w-3/4 lg:w-1/2 text-center">
        <p className="py-3 text-white">
          I am an experienced public speaker, delivering numerous talks each year — from small group sessions for lawyers, public entities, and developers to keynotes and panel discussions at major conferences. I have also contributed to several podcasts
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
