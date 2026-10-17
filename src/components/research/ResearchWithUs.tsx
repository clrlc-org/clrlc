import Link from 'next/link';

export function ResearchWithUs() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Research with us
          </h2>

          <p className="text-lg sm:text-xl text-white/90 mb-10">
            Join a project as a contributor, language lead or collaborator.
          </p>

          <Link
            href="/community"
            className="inline-flex items-center px-6 py-3 bg-white text-[#2E2357] font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Join a research project
          </Link>
        </div>
      </div>
    </section>
  );
}
