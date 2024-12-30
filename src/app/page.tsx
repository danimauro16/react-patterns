import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-10">
        <div className="flex gap-4 justify-center mt-8">
          <Link href="/poke-list">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full text-xl shadow-lg hover:shadow-xl hover:from-pink-500 hover:to-purple-500 transition-transform transform hover:scale-105">
              Poke List
            </button>
          </Link>
          <Link href="/poke-search">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-6 rounded-full text-xl shadow-lg hover:shadow-xl hover:from-green-500 hover:to-blue-500 transition-transform transform hover:rotate-3">
              Poke Search
            </button>
          </Link>ß
        </div>
      </main>
    </div>
  );
}
