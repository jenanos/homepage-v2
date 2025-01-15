export default function Music() {
  return (
    <div
      id="music"
      className="min-h-screen md:min-h-fit w-screen md:py-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#1E3A8A] to-[#60A5FA]"
    >
      <h1 className="p-4 text-4xl text-white">Music</h1>
      <div className="flex w-3/4 flex-row justify-evenly text-center flex-wrap">
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
        <div className="w-96 text-white">
          <p className="py-3">
            I play guitar in a band called Gete. In the summer of 2024, we
            proudly released an album titled Tynn Is.
          </p>
          <p className="py-3">
            We have been playing together for over 12 years, writing original
            music with lyrics in Norwegian, specifically in a traditional Mandal
            dialect. Our music blends pop with influences from Norwegian folk
            and blues.
          </p>
          <p className="py-3">
            In addition to playing guitar, I contribute as a co-vocalist and
            co-writer for many of our songs.
          </p>
        </div>
      </div>
    </div>
  );
}
