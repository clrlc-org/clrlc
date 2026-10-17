interface ProjectsSectionProps {
  filter?: string | null;
}

export function ProjectsSection({ filter = null }: ProjectsSectionProps) {
  const showYorGe = filter === null || filter === 'code-switching';

  return (
    <section className="bg-[#F7F4EE] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="mb-4 inline-block">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
            Current Projects
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#111111] mb-12">
          What We Are Building
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YorGe-CS Card */}
          {showYorGe && (
            <a
              href="https://huggingface.co/datasets/CLRLC-Org/YORGE-CS"
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-[#D9D9D9] rounded-[16px] p-[2.2rem] transition-all hover:shadow-lg hover:-translate-y-2 cursor-pointer flex flex-col h-full shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                YorGe-CS
              </h3>
              <p className="text-base text-[#1F1F1F] leading-relaxed mb-6 flex-grow">
                YorGe-CS is a human-validated synthetic corpus of Yoruba–German code-switched sentences across five domains: Education, Food, Business, Agriculture and Sport. It supports the training and evaluation of machine translation models for code-switched language.
              </p>
              <span className="inline-flex items-center gap-1 text-[#1898A8] font-medium text-sm">
                View dataset ↗
              </span>
            </a>
          )}

          {/* Langture-Bench Card */}
          <a
            href="/research/langture-bench"
            className="bg-[#2E2357] rounded-[16px] p-[2.2rem] transition-all hover:shadow-lg hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="mb-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white bg-white/20 rounded-full">
                In progress
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Langture-Bench
            </h3>
            <p className="text-white leading-relaxed mb-6 flex-grow text-sm">
              A multilingual and multicultural corpus of African proverbs, also built as a benchmark to test how well language models understand culture.
            </p>
            <span className="inline-flex items-center gap-2 text-white font-medium text-sm">
              View project →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
