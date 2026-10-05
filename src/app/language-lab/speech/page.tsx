'use client';

import { useRef, useState } from 'react';
import { Upload, Mic, Download, Edit2, Play, Pause } from 'lucide-react';
import { transcribe } from '@/lib/language-lab/api';
import { TranscriptFile } from '@/lib/language-lab/types';

const LANGUAGES = [
  { code: 'yor', name: 'Yorùbá' },
  { code: 'ha', name: 'Hausa' },
  { code: 'ig', name: 'Igbo' },
  { code: 'pcm', name: 'Nigerian Pidgin' },
  { code: 'yor-en', name: 'Yorùbá–English (mixed)', disabled: true },
];

export default function SpeechPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('yor');
  const [transcript, setTranscript] = useState<TranscriptFile | null>(null);
  const [processing, setProcessing] = useState(false);
  const [editingLineId, setEditingLineId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [playing, setPlaying] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setProcessing(true);
    try {
      const result = await transcribe(file, selectedLanguage);
      setTranscript(result);
    } finally {
      setProcessing(false);
    }
  };

  const handleEdit = (lineId: string, text: string) => {
    setEditingLineId(lineId);
    setEditingText(text);
  };

  const handleSaveEdit = (lineId: string) => {
    if (transcript) {
      const updated = {
        ...transcript,
        lines: transcript.lines.map(l =>
          l.id === lineId ? { ...l, text: editingText } : l
        ),
      };
      setTranscript(updated);
      setEditingLineId(null);
    }
  };

  const downloadTranscript = (format: 'txt' | 'srt' | 'csv' | 'json') => {
    if (!transcript) return;

    let content: string;
    let filename: string;

    switch (format) {
      case 'txt':
        content = transcript.lines.map(l => l.text).join('\n');
        filename = `${transcript.name}.txt`;
        break;
      case 'srt':
        content = transcript.lines
          .map((l, i) => {
            const startTime = formatTimestamp(l.timestamp);
            const endTime = formatTimestamp(
              transcript.lines[i + 1]?.timestamp || l.timestamp + 3
            );
            return `${i + 1}\n${startTime} --> ${endTime}\n${l.text}`;
          })
          .join('\n\n');
        filename = `${transcript.name}.srt`;
        break;
      case 'csv':
        content =
          'Timestamp,Text\n' +
          transcript.lines
            .map(l => `"${l.timestamp}","${l.text.replace(/"/g, '""')}"`)
            .join('\n');
        filename = `${transcript.name}.csv`;
        break;
      case 'json':
        content = JSON.stringify(transcript.lines, null, 2);
        filename = `${transcript.name}.json`;
        break;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Speech to text</h1>
        <p className="text-slate-600">Record or upload audio to get a transcript</p>
      </div>

      {!transcript ? (
        <div className="space-y-6">
          {/* Upload Panel */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-slate-900 mb-3 block">
                  Language
                </span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {LANGUAGES.map(lang => (
                    <option key={lang.code} value={lang.code} disabled={lang.disabled}>
                      {lang.name}
                      {lang.disabled ? ' (coming soon)' : ''}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-3 rounded-lg transition-colors">
                <Mic className="w-5 h-5" />
                Record
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={processing}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Upload className="w-5 h-5" />
                {processing ? 'Processing...' : 'Upload'}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                hidden
              />
            </div>

            <button
              disabled={processing}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {processing ? 'Transcribing...' : 'Transcribe'}
            </button>

            <p className="text-xs text-slate-500">Up to 10 minutes per file</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Transcript Editor */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-6">
            {/* Audio Player */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-4">
                <button
                  onClick={() => setPlaying(!playing)}
                  className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <div className="flex-1">
                  <div className="bg-slate-300 rounded h-1"></div>
                </div>
                <span className="text-sm font-medium text-slate-600">
                  {Math.floor(transcript.duration)}:{Math.floor((transcript.duration % 1) * 60)
                    .toString()
                    .padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Transcript Lines */}
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">Transcript</h3>
              {transcript.lines.map(line => (
                <div
                  key={line.id}
                  className="flex gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <button className="text-sm font-medium text-primary hover:underline">
                      {formatTimestamp(line.timestamp)}
                    </button>
                  </div>
                  <div className="flex-1 min-w-0">
                    {editingLineId === line.id ? (
                      <div className="flex gap-2">
                        <input
                          autoFocus
                          type="text"
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          className="flex-1 px-3 py-1 border border-slate-300 rounded text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                          onClick={() => handleSaveEdit(line.id)}
                          className="px-3 py-1 bg-primary text-white text-sm rounded font-medium hover:bg-primary/90"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <p className="text-slate-900 text-sm flex-1">{line.text}</p>
                        <button
                          onClick={() => handleEdit(line.id, line.text)}
                          className="p-1 hover:bg-slate-200 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Edit2 className="w-4 h-4 text-slate-500" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-2 border-t border-slate-200 pt-6">
              <p className="text-sm font-semibold text-slate-900">Download</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['txt', 'srt', 'csv', 'json'] as const).map(format => (
                  <button
                    key={format}
                    onClick={() => downloadTranscript(format)}
                    className="flex items-center justify-center gap-2 px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {format.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setTranscript(null)}
            className="text-primary font-semibold hover:underline"
          >
            ← Back to upload
          </button>
        </div>
      )}
    </div>
  );
}

function formatTimestamp(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms
    .toString()
    .padStart(3, '0')}`;
}
