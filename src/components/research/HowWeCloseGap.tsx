export function HowWeCloseGap() {
  const approaches = [
    {
      number: '01',
      title: 'Data Curation',
      description: 'We collect, transcribe and annotate text and speech with native speakers and trained linguists, including code-switched language and regional dialects, and validate every sample before release.',
    },
    {
      number: '02',
      title: 'Cultural Benchmarks',
      description: 'We design benchmarks that test whether models grasp idioms, everyday expressions and cultural context, not just vocabulary.',
    },
    {
      number: '03',
      title: 'Inclusive Models',
      description: 'We adapt and fine-tune speech and language models for low-resource languages, including efficient methods that work with limited data and compute.',
    },
    {
      number: '04',
      title: 'Evaluation',
      description: 'We assess models through automatic and human evaluation, with native speakers and linguists reviewing outputs to find where models fail and why.',
    },
  ];

  return (
    <section className="bg-[#F7F4EE] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="mb-10 inline-block">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
            Our Approach
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((item) => (
            <div
              key={item.number}
              className="bg-white border-[1px] rounded-[8px] p-8 shadow-sm transition-all hover:shadow-md flex flex-col h-full"
              style={{ borderColor: '#D9D9D9' }}
            >
              <div className="text-5xl font-bold text-[#2E2357] mb-4">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold text-[#111111] mb-3">
                {item.title}
              </h3>
              <p className="text-base text-[#1F1F1F] leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
