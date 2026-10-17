interface ProjectsSectionProps {
  filter?: string;
}

export function ProjectsSection({ filter = 'all' }: ProjectsSectionProps) {
  const showYorGe = filter === 'all' || filter === 'code-switching';

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="mb-10 inline-block">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
            What We're Building
          </span>
        </div>

        {/* Cards */}
        <div className={`grid ${showYorGe ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-8`}>
          {/* YorGe-CS Card */}
          {showYorGe && (
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-105">
              <div className="h-2 bg-[#1898A8]" />
              <div className="p-8">
                <div className="mb-4 inline-block">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white bg-[#1898A8] rounded-full">
                    Experiments complete
                  </span>
                </div>
                <p className="text-sm text-[#1F1F1F] mb-3 font-medium">
                  Code-switching · MT
                </p>
                <h3 className="text-2xl font-bold text-[#111111] mb-4">
                  YorGe-CS
                </h3>
                <p className="text-base text-[#1F1F1F] leading-relaxed mb-6">
                  Yorùbá–German code-switched corpus, 5 domains.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#1898A8] font-medium hover:gap-3 transition-all"
                >
                  View project →
                </a>
              </div>
            </div>
          )}

          {/* Langture Card */}
          <div className="bg-[#2E2357] rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-105 flex flex-col items-center justify-center p-8 min-h-64">
            <div className="mb-6">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white border border-white/30 rounded-full">
                Coming soon
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white">LANGTURE</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
