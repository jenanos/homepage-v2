export default function Other() {
  return (
    <div
      id="other"
      className="min-h-screen md:min-h-fit w-screen md:py-10 flex flex-col items-center justify-center bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/waves.svg')",
      }}
    >
      <h1 className="p-4 text-4xl text-white">Other</h1>
      <div className="flex w-screen flex-row justify-evenly text-center flex-wrap">
        <p className="py-3">
          I also do some coding, but since i primarily work with AI policy and
          regulation, most of the coding is just for fun, as demonstrated by
          this website…
        </p>
        <p className="py-3">
          For my previous homepage i experimented a lot with Blender and
          Three.js and created a small 3D world. It is still up and running
          here.
        </p>
        <div className="mt-4"></div>
      </div>
    </div>
  );
}
