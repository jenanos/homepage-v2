export default function Speaking() {
  return (
    <div
      id="speaking"
      className="h-screen w-screen flex flex-col items-center justify-center bg-[#b3b3b3]"
    >
      <h1 className="p-4 text-4xl text-white">Public speaking</h1>
      <h2 className="text-center">
        I am an experienced public speaker and have contributed to several
        podcasts.
      </h2>
      <div className="flex w-screen flex-row justify-evenly text-center flex-wrap">
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
