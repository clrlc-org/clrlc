interface ProjectsSectionProps {
  filter?: string | null;
}

export function ProjectsSection({ filter = null }: ProjectsSectionProps) {
  const showYorGe = filter === null || filter === 'code-switching';

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="mb-4 inline-block">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
            Current Projects
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#111111] mb-4">
          What We're Building
        </h2>

        {/* Subtext */}
        <p className="text-lg text-[#1F1F1F] mb-12 max-w-2xl">
          Open resources and research advancing language technology for low-resource languages.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YorGe-CS Card */}
          {showYorGe && (
            <a
              href="https://huggingface.co/datasets/CLRLC-Org/YORGE-CS"
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-[#D9D9D9] rounded-[16px] p-[2.2rem] transition-all hover:shadow-lg hover:-translate-y-2 cursor-pointer flex flex-col h-full"
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

          {/* Langture Card */}
          <div className="bg-white border border-[#D9D9D9] rounded-[16px] p-[2.2rem] transition-all hover:shadow-lg hover:-translate-y-2 flex flex-col items-center justify-center h-full min-h-64">
            <h3 className="text-2xl font-bold text-[#111111] mb-4">
              LANGTURE
            </h3>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#111111] border border-[#D9D9D9] rounded-full">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
