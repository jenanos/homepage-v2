export default function Music() {
  return (
    <div
      id="music"
      className="h-screen w-screen flex flex-col items-center justify-center bg-[#b3b3b3]"
    >
      <h1 className="p-4 text-4xl text-white">Public speaking</h1>
      <div className="flex w-screen flex-row justify-evenly text-center flex-wrap">
        <p className="py-3">
          Outside of work, I play guitar in a band called Gete. I also do some
          coding, but primarily for fun, as demonstrated by this website…
        </p>
        <div className="mt-4">
          <iframe
            className="rounded-lg"
            src="https://open.spotify.com/embed/album/4hozCpmIaT0jbctqL3sOFi?utm_source=generator"
            width="100%"
            height="352"
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
