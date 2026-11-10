export default function Other() {
  return (
    <section
      id="developer"
      className="min-h-screen md:min-h-fit w-screen pt-24 pb-48 md:pb-64 flex flex-col items-center justify-center bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/waves.svg')",
      }}
      aria-labelledby="developer-heading"
    >
      <h2 id="developer-heading" className="p-4 text-4xl text-white">
        Developer
      </h2>
      <div className="w-3/4 lg:w-1/2 text-white text-left md:text-center">
        <p className="py-3">
          I hold a bachelor’s degree in programming and system architecture and have experience with languages and technologies such as Python, Java, Kotlin, TypeScript, React, Next.js, SQL, Tailwind and Docker.
        </p>
        <p className="py-3">
          While my day job is in law and AI regulation, agentic coding has changed how much I can build on the side. With today’s AI tools, I can develop quickly and efficiently alongside my legal work. I always have several apps and projects on the go, and new ones keep appearing along the way.
        </p>
        <p className="py-3">
          This is where my computer science background really comes into its own. A good overview of systems, architecture, technologies and programming languages lets me direct the AI, make sound technical choices and take on a wide range of problems.
        </p>
        <p className="py-3">
          Among other things, I have built solutions for meal planning and shopping lists, Norwegian speech-to-text transcription, music theory and keeping track of everything in our home. They are self-hosted on my own servers, and several of them are connected to AI assistants through MCP.
        </p>
      </div>
    </section>
  );
}
