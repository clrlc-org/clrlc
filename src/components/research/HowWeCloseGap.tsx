export function HowWeCloseGap() {
  const approaches = [
    {
      number: '01',
      title: 'Community data',
      description: 'Corpora collected and annotated with native speakers.',
    },
    {
      number: '02',
      title: 'Cultural benchmarks',
      description: 'Tests of whether models understand culture and context.',
    },
    {
      number: '03',
      title: 'Inclusive models',
      description: 'Speech and language models built on that data.',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-lg overflow-hidden transition-all hover:shadow-lg hover:scale-105"
            >
              {/* Colored top border */}
              <div className="h-1 bg-[#1898A8]" />

              <div className="p-8">
                <div className="text-5xl font-bold text-[#2E2357] mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-[#1F1F1F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
