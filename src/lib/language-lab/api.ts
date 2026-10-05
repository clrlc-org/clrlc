import { mockTranscripts, mockTranslations, mockRecentFiles, mockUsageStats } from './mock-data';
import { TranscriptFile, TranslationFile, RecentFile, UsageStats } from './types';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function transcribe(
  audio: File,
  language: string,
): Promise<TranscriptFile> {
  await delay(2500);

  // Return a sample transcript
  return {
    ...mockTranscripts[0],
    id: `ts-${Date.now()}`,
    name: audio.name.replace(/\.[^.]*$/, ''),
    language,
    createdAt: new Date(),
  };
}

export async function translate(
  file: File,
  sourceLanguage: string,
  style: 'Academic' | 'General',
): Promise<TranslationFile> {
  await delay(3500);

  // Return a sample translation
  return {
    ...mockTranslations[0],
    id: `tr-${Date.now()}`,
    name: file.name,
    sourceLanguage,
    style,
    createdAt: new Date(),
  };
}

export async function getFiles(tool?: string): Promise<RecentFile[]> {
  await delay(500);

  if (!tool) {
    return mockRecentFiles;
  }

  return mockRecentFiles.filter(f => f.tool === tool);
}

export async function getUsageStats(): Promise<UsageStats> {
  await delay(300);
  return mockUsageStats;
}

export async function getTranscript(id: string): Promise<TranscriptFile | null> {
  await delay(400);
  return mockTranscripts.find(t => t.id === id) || null;
}

export async function getTranslation(id: string): Promise<TranslationFile | null> {
  await delay(400);
  return mockTranslations.find(t => t.id === id) || null;
}
