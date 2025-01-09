import Image from "next/image";

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
      <div className="flex w-3/4 flex-row justify-evenly text-center flex-wrap">
        <div>
          <p className="w-96 py-3">
            I hold a bachelor’s degree in programming and system architecture
            and have experience with languages and technologies such as Python,
            Java, Kotlin, JavaScript, React, Next.js, SQL, and Tailwind
          </p>
          <p className="w-96 py-3">
            While my primary focus is on AI policy and regulation, I use coding
            as both a learning tool and a hobby. It helps me explore emerging
            features and technologies while staying connected to my technical
            roots.
          </p>
          <p className="w-96 py-3">
            This website is an example of such experimentation. Much of its code
            was developed with GitHub Copilot and ChatGPT, so that I could get
            familiar with the capabilities of AI-assisted coding.
          </p>
        </div>
        <div>
          <p className="w-96 py-3">
            In a previous version of this website, I experimented with 3D design
            using Blender and Three.js to create an interactive 3D environment.
            That version is still live and can be viewed here.
          </p>
          <div className="w-96">
            <Image
              src="/prev-site.jpg"
              alt="Previous version of the site"
              width={1469}
              height={835}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
