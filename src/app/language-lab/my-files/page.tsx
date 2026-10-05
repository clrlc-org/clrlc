'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { getFiles } from '@/lib/language-lab/api';
import { RecentFile } from '@/lib/language-lab/types';

export default function MyFilesPage() {
  const [allFiles, setAllFiles] = useState<RecentFile[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<RecentFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [toolFilter, setToolFilter] = useState<'all' | 'Speech' | 'Translate'>('all');

  useEffect(() => {
    async function loadFiles() {
      try {
        const files = await getFiles();
        setAllFiles(files);
      } finally {
        setLoading(false);
      }
    }

    loadFiles();
  }, []);

  useEffect(() => {
    let filtered = allFiles;

    if (toolFilter !== 'all') {
      filtered = filtered.filter(f => f.tool === toolFilter);
    }

    if (search) {
      filtered = filtered.filter(f =>
        f.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredFiles(filtered);
  }, [allFiles, search, toolFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My files</h1>
        <p className="text-slate-600">All your transcripts and translations</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {(['all', 'Speech', 'Translate'] as const).map(tool => (
            <button
              key={tool}
              onClick={() => setToolFilter(tool)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                toolFilter === tool
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              {tool === 'all' ? 'All tools' : tool}
            </button>
          ))}
        </div>
      </div>

      {/* Files Table */}
      {!loading ? (
        filteredFiles.length > 0 ? (
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
                {filteredFiles.map(file => (
                  <tr
                    key={file.id}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                      {file.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{file.tool}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {file.language}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {file.lengthOrPages}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        Ready
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
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
            <p className="text-slate-600">
              {search || toolFilter !== 'all'
                ? 'No files match your search'
                : 'No files yet'}
            </p>
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <div className="inline-block animate-spin">
            <div className="w-8 h-8 border-4 border-slate-200 border-t-primary rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
}
