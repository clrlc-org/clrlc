'use client';

import { useRef, useState } from 'react';
import { Upload, ChevronLeft, ChevronRight, Download, AlertCircle } from 'lucide-react';
import { translate } from '@/lib/language-lab/api';
import { TranslationFile } from '@/lib/language-lab/types';

const SOURCE_LANGUAGES = [
  { code: 'yor', name: 'Yorùbá' },
  { code: 'ha', name: 'Hausa' },
  { code: 'ig', name: 'Igbo' },
  { code: 'sw', name: 'Swahili' },
];

const STYLES = ['Academic', 'General'] as const;

export default function TranslatePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [sourceLanguage, setSourceLanguage] = useState('yor');
  const [style, setStyle] = useState<'Academic' | 'General'>('General');
  const [translation, setTranslation] = useState<TranslationFile | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [processing, setProcessing] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setProcessing(true);
    try {
      const result = await translate(file, sourceLanguage, style);
      setTranslation(result);
      setCurrentPage(0);
    } finally {
      setProcessing(false);
    }
  };

  const currentPageData = translation?.pages[currentPage];

  const downloadTranslation = (format: 'pdf' | 'docx') => {
    if (!translation) return;
    // Simulate download
    const content = translation.pages.map(p => p.translation).join('\n\n');
    const blob = new Blob([content], {
      type: format === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${translation.name.replace(/\.[^.]*$/, '')}_translated.${format === 'pdf' ? 'pdf' : 'docx'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Translate documents</h1>
        <p className="text-slate-600">Upload a PDF or Word document to translate</p>
      </div>

      {!translation ? (
        <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-6">
          {/* File Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              Document
            </label>
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={processing}
              className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg p-8 hover:border-primary transition-colors disabled:opacity-50"
            >
              <Upload className="w-6 h-6 text-slate-400" />
              <span className="font-medium text-slate-900">
                {processing ? 'Uploading...' : 'Click to upload PDF or Word'}
              </span>
              <span className="text-xs text-slate-500">or drag and drop</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              hidden
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-900">
                From
              </label>
              <select
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {SOURCE_LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-900">
                To
              </label>
              <input
                type="text"
                value="English"
                disabled
                className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-600 bg-slate-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-900">
              Style
            </label>
            <div className="flex gap-2">
              {STYLES.map(s => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    style === s
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={processing}
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {processing ? 'Translating...' : 'Translate'}
          </button>
        </div>
      ) : currentPageData ? (
        <div className="space-y-6">
          {/* Page Navigation */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Page {currentPage + 1} of {translation.pageCount}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage(Math.min(translation.pageCount - 1, currentPage + 1))
                }
                disabled={currentPage === translation.pageCount - 1}
                className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Side-by-side Review */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Original */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Original</h3>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                {currentPageData.original}
              </p>
            </div>

            {/* Translation */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">English</h3>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                {currentPageData.translation}
              </p>

              {/* Uncertain Words */}
              {currentPageData.uncertainWords.length > 0 && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-amber-900 mb-2">Review these words:</p>
                      <div className="space-y-2">
                        {currentPageData.uncertainWords.map((word, i) => (
                          <div key={i}>
                            <p className="font-medium text-amber-900">"{word.word}"</p>
                            <p className="text-xs text-amber-700">
                              Alternatives: {word.alternatives.join(', ')}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Download & Actions */}
          <div className="space-y-4 border-t border-slate-200 pt-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-900">Download</p>
              <div className="flex gap-2">
                {(['pdf', 'docx'] as const).map(format => (
                  <button
                    key={format}
                    onClick={() => downloadTranslation(format)}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-50"
                  >
                    <Download className="w-4 h-4" />
                    {format.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-600 bg-slate-50 cursor-not-allowed"
            >
              Request linguist review (coming soon)
            </button>
          </div>

          <button
            onClick={() => setTranslation(null)}
            className="text-primary font-semibold hover:underline"
          >
            ← Upload another document
          </button>
        </div>
      ) : null}
    </div>
  );
}
