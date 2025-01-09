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
      <div className="flex w-3/4 md:w-1/2 flex-row justify-evenly text-center flex-wrap">
        <div className="mt-4">
          <iframe
            className="rounded-lg"
            src="https://open.spotify.com/embed/episode/6oYDwwjDGiTBJivip5EG3g?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-4">
          <iframe
            className="rounded-lg"
            src="https://open.spotify.com/embed/episode/3Q7uWL3e2gn7zRC9xbQq0S?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
