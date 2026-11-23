export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

      <nav className="flex justify-between p-6">
        <h1 className="font-bold text-2xl text-blue-600">
          BizPilot AI
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Login
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center text-center mt-32 px-8">

        <h2 className="text-6xl font-bold max-w-4xl">
          AI Assistant For Kenyan Businesses
        </h2>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Create marketing campaigns, Facebook posts,
          WhatsApp promotions and business documents in seconds.
        </p>

        <div className="flex gap-4 mt-8">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Try Free
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-lg">
            Learn More
          </button>

        </div>

      </section>

    </main>
  );
}