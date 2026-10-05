export interface TranscriptLine {
  id: string;
  timestamp: number; // in seconds
  text: string;
}

export interface TranscriptFile {
  id: string;
  name: string;
  language: string;
  duration: number; // in minutes
  status: 'completed' | 'processing';
  createdAt: Date;
  lines: TranscriptLine[];
}

export interface UncertainWord {
  word: string;
  alternatives: string[];
}

export interface TranslationPage {
  number: number;
  original: string;
  translation: string;
  uncertainWords: UncertainWord[];
}

export interface TranslationFile {
  id: string;
  name: string;
  sourceLanguage: string;
  targetLanguage: 'English';
  style: 'Academic' | 'General';
  pageCount: number;
  status: 'completed' | 'processing';
  createdAt: Date;
  pages: TranslationPage[];
}

export type LabFile = TranscriptFile | TranslationFile;

export interface RecentFile {
  id: string;
  name: string;
  tool: 'Speech' | 'Translate';
  language: string;
  lengthOrPages: string;
  status: 'completed' | 'processing';
  date: Date;
}

export interface UsageStats {
  minutesTranscribed: number;
  pagesTranslated: number;
  contributions: number;
}
