export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 mt-24">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I’m Sakar 👋
      </h1>

      <p className="text-gray-400 text-lg max-w-xl">
        Data Engineer & Project Coordinator specializing in
        data migration, system reliability, and process automation.
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="/projects"
          className="bg-white text-black px-6 py-2 rounded"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="border border-gray-600 px-6 py-2 rounded"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}