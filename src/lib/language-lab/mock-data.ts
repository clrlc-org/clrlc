import { TranscriptFile, TranslationFile, RecentFile, UsageStats } from './types';

export const mockTranscripts: TranscriptFile[] = [
  {
    id: 'ts-1',
    name: 'Interview - Biodiversity in Yorùbá culture',
    language: 'Yorùbá',
    duration: 8.5,
    status: 'completed',
    createdAt: new Date('2026-10-03'),
    lines: [
      { id: 'line-1', timestamp: 0, text: 'Bawo ni ẹ wa?' },
      { id: 'line-2', timestamp: 2, text: 'Àwa ń bẹ́ nílẹ̀ ní ìrọ̀ ilẹ̀.' },
      { id: 'line-3', timestamp: 5, text: 'Àwọn ẹranko àti ewé gidi ló ń mú wá láré.' },
      { id: 'line-4', timestamp: 8, text: 'Ìdí nìyí tí a ń pèsè mọ́ ilẹ̀.' },
      { id: 'line-5', timestamp: 11, text: 'Orisun àìmọ̀ láti ínú ilẹ̀ ni ọ̀rẹ́ wa.' },
      { id: 'line-6', timestamp: 14, text: 'Nítorí báyìí, àwa gbọ́dọ̀ ṣọ ilẹ̀ gba pẹ́lu àwọn ọ̀mọ̀ wa.' },
      { id: 'line-7', timestamp: 18, text: 'Ẹni tí ó ń ṣe ìdí ní ìgbà tó lọ kò wà nìbẹ̀ ní ígbà yìí.' },
      { id: 'line-8', timestamp: 22, text: 'Nítorí náà, òkè ní ìwájú wa fún àbájó ìjìnlẹ̀.' },
    ],
  },
  {
    id: 'ts-2',
    name: 'Workshop notes - Language documentation',
    language: 'Yorùbá',
    duration: 5.2,
    status: 'completed',
    createdAt: new Date('2026-10-01'),
    lines: [
      { id: 'line-1', timestamp: 0, text: 'Àkọ́kọ́ tí a gbọ́dọ̀ jẹ́ jẹ́ ni pípè sí ìmọ̀ olùkọ́.' },
      { id: 'line-2', timestamp: 3, text: 'Àwọn onímọ̀ ní ìjìnlẹ̀ ni a nílò.' },
      { id: 'line-3', timestamp: 6, text: 'Àwọn iwe àti iṣẹ́ ọ̀rọ̀ ìgbà oyè.' },
      { id: 'line-4', timestamp: 9, text: 'Àwọn àìye àti àwọn èkó tuntun.' },
    ],
  },
];

export const mockTranslations: TranslationFile[] = [
  {
    id: 'tr-1',
    name: 'CLRLC_Annual_Report_2026_Yoruba.pdf',
    sourceLanguage: 'Yorùbá',
    targetLanguage: 'English',
    style: 'Academic',
    pageCount: 12,
    status: 'completed',
    createdAt: new Date('2026-09-28'),
    pages: [
      {
        number: 1,
        original: 'Àkójọ Ìdìtò Ìṣẹ́ Ọdun 2026: Àwọn Iṣẹ́ Pẹ̀lú Àwọn Ède Alápapọ̀ Ìmọ̀ Isẹ́.',
        translation: 'Annual Progress Report 2026: Advancing Research with Low-Resource Languages.',
        uncertainWords: [],
      },
      {
        number: 2,
        original: 'Ní ọdun tó lọ, àwa ní ìmúsíṣe ìrànlọ́wọ́ sí àwọn olùkọ́ ní Yorùbá, Háúsà, àti Ìgbo.',
        translation: 'Over the past year, we provided support to linguists working with Yorùbá, Hausa, and Igbo.',
        uncertainWords: [
          { word: 'olùkọ́', alternatives: ['linguists', 'educators', 'teachers'] },
        ],
      },
    ],
  },
  {
    id: 'tr-2',
    name: 'Sample_Article_Yoruba.docx',
    sourceLanguage: 'Yorùbá',
    targetLanguage: 'English',
    style: 'General',
    pageCount: 3,
    status: 'completed',
    createdAt: new Date('2026-09-25'),
    pages: [
      {
        number: 1,
        original: 'Ede Yoruba jẹ ede owá tí ó pẹ́ ju ewé gidi lọ.',
        translation: 'The Yorùbá language is an ancient language with a rich history.',
        uncertainWords: [],
      },
    ],
  },
];

export const mockRecentFiles: RecentFile[] = [
  {
    id: 'ts-1',
    name: 'Interview - Biodiversity in Yorùbá culture',
    tool: 'Speech',
    language: 'Yorùbá',
    lengthOrPages: '8.5 min',
    status: 'completed',
    date: new Date('2026-10-03'),
  },
  {
    id: 'tr-1',
    name: 'CLRLC_Annual_Report_2026_Yoruba.pdf',
    tool: 'Translate',
    language: 'Yorùbá → English',
    lengthOrPages: '12 pages',
    status: 'completed',
    date: new Date('2026-09-28'),
  },
  {
    id: 'ts-2',
    name: 'Workshop notes - Language documentation',
    tool: 'Speech',
    language: 'Yorùbá',
    lengthOrPages: '5.2 min',
    status: 'completed',
    date: new Date('2026-10-01'),
  },
  {
    id: 'tr-2',
    name: 'Sample_Article_Yoruba.docx',
    tool: 'Translate',
    language: 'Yorùbá → English',
    lengthOrPages: '3 pages',
    status: 'completed',
    date: new Date('2026-09-25'),
  },
];

export const mockUsageStats: UsageStats = {
  minutesTranscribed: 342,
  pagesTranslated: 47,
  contributions: 12,
};
