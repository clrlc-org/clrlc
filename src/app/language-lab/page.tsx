'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock, FileText, Heart, Plus } from 'lucide-react';
import { getUsageStats, getFiles } from '@/lib/language-lab/api';
import { StatsCard } from './components/StatsCard';
import { UsageStats, RecentFile } from '@/lib/language-lab/types';

export default function LanguageLabHome() {
  const [stats, setStats] = useState<UsageStats | null>(null);
  const [recentFiles, setRecentFiles] = useState<RecentFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [statsData, filesData] = await Promise.all([
          getUsageStats(),
          getFiles(),
        ]);
        setStats(statsData);
        setRecentFiles(filesData.slice(0, 5));
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Welcome to Language Lab
        </h1>
        <p className="text-lg text-slate-600">
          Transform your African language content with speech-to-text and translation
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats ? (
          <>
            <StatsCard
              icon={Clock}
              label="Minutes transcribed"
              value={stats.minutesTranscribed}
              unit="min"
            />
            <StatsCard
              icon={FileText}
              label="Pages translated"
              value={stats.pagesTranslated}
              unit="pages"
            />
            <StatsCard
              icon={Heart}
              label="Contributions"
              value={stats.contributions}
              unit="files"
            />
          </>
        ) : (
          <div className="col-span-3 text-center py-12">
            <div className="inline-block animate-spin">
              <div className="w-8 h-8 border-4 border-slate-200 border-t-primary rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/language-lab/speech"
          className="flex items-center justify-center gap-3 bg-primary text-white rounded-lg p-6 font-semibold hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-6 h-6" />
          New transcription
        </Link>
        <Link
          href="/language-lab/translate"
          className="flex items-center justify-center gap-3 bg-primary text-white rounded-lg p-6 font-semibold hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-6 h-6" />
          Translate a document
        </Link>
      </div>

      {/* Recent Files */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent files</h2>
        {recentFiles.length > 0 ? (
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                    Name
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                    Tool
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                    Language
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                    Length
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentFiles.map((file) => (
                  <tr
                    key={file.id}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                      {file.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {file.tool}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {file.language}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {file.lengthOrPages}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        {file.status === 'completed' ? 'Ready' : 'Processing'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {file.date.toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : !loading ? (
          <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
            <p className="text-slate-600">No files yet. Start with a transcription or translation!</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
