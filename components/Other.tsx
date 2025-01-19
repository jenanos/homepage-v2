import { PrevSite } from "./prevSite";

export default function Other() {
  return (
    <div
      id="developer"
      className="min-h-screen md:min-h-fit w-screen md:py-10 flex flex-col items-center justify-center bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/waves.svg')",
      }}
    >
      <h1 className="p-4 text-4xl text-white">Developer</h1>
      <div className="flex w-3/4 flex-row justify-evenly text-center flex-wrap">
        <div className="w-96 text-white">
          <p className="py-3">
            I hold a bachelor’s degree in programming and system architecture
            and have experience with languages and technologies such as Python,
            Java, Kotlin, JavaScript, React, Next.js, SQL, and Tailwind
          </p>
          <p className="py-3">
            While my primary focus is on AI policy and regulation, I use coding
            as both a learning tool and a hobby. It helps me explore emerging
            features and technologies while staying connected to my technical
            roots.
          </p>
        </div>
        <PrevSite />
      </div>
    </div>
  );
}
