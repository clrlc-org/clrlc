export default function ContributePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Contribute</h1>
        <p className="text-slate-600">Help us build open datasets for African languages</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
          <p className="text-slate-700 leading-relaxed">
            You can share your corrected transcripts and translations with CLRLC to help build
            open datasets for African languages. This helps linguists and researchers improve tools
            for languages that have traditionally been overlooked in AI.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Your consent</h2>
          <p className="text-slate-700 leading-relaxed">
            Sharing is always optional. You choose which files to contribute, and you can review
            exactly what will be shared before it leaves your account. We'll never use your data
            without your explicit permission.
          </p>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Coming soon:</strong> Toggle to mark files as ready to contribute, and review
            what's being shared.
          </p>
        </div>
      </div>
    </div>
  );
}
