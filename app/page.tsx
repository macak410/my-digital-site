export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-dark-100 text-white">
      <h1 className="text-3xl font-bold animate-shimmer">Tomislav Portfolio ✨</h1>
      <div className="bg-grid-blue-400 h-64 w-full" />
      <p className="text-[var(--primary-DEFAULT)] text-xl">
        Koristim boju iz Tailwind varijable!
      </p>
      <div className="bg-white dark:bg-dark-100 text-black dark:text-white p-4 rounded">
        Osvijetljena tema vs tamna tema
      </div>
    </main>
  );
}