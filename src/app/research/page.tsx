import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { RESEARCH_QUERY } from "@/sanity/lib/queries";
import { ResearchPageClient } from "@/components/research/ResearchPageClient";

export const metadata: Metadata = {
  title: "Research - CLRLC",
  description:
    "Speech and text datasets, benchmarks and models for low-resource languages.",
};

export const revalidate = 60;

const floatingLanguages = [
  { name: "Yoruba", top: "6%", left: "10%", duration: "12s", delay: "-2s", size: "text-sm sm:text-base", anim: 2, color: "text-[#5FD0DC]" },
  { name: "Hausa", top: "5%", left: "32%", duration: "14s", delay: "-6s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Igbo", top: "8%", left: "55%", duration: "10s", delay: "-4s", size: "text-sm", anim: 1, color: "text-[#DDF3F5]" },
  { name: "Swahili", top: "4%", left: "78%", duration: "13s", delay: "-8s", size: "text-base sm:text-lg", anim: 2, color: "text-[#5FD0DC]" },
  { name: "Amharic", top: "10%", left: "95%", duration: "11s", delay: "-1s", size: "text-sm", anim: 1, color: "text-[#CFC9E6]" },
  { name: "Zulu", top: "22%", left: "20%", duration: "15s", delay: "-9s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Twi", top: "20%", left: "45%", duration: "9s", delay: "-3s", size: "text-sm", anim: 1, color: "text-[#DDF3F5]" },
  { name: "Wolof", top: "25%", left: "68%", duration: "12s", delay: "-7s", size: "text-lg sm:text-xl", anim: 2, color: "text-[#5FD0DC]" },
  { name: "Shona", top: "18%", left: "88%", duration: "14s", delay: "-5s", size: "text-sm sm:text-base", anim: 2, color: "text-white" },
  { name: "Somali", top: "30%", left: "5%", duration: "10s", delay: "-10s", size: "text-sm", anim: 1, color: "text-[#5FD0DC]" },
  { name: "Oromo", top: "38%", left: "30%", duration: "13s", delay: "-11s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Xhosa", top: "42%", left: "55%", duration: "11s", delay: "-4.5s", size: "text-sm", anim: 1, color: "text-[#CFC9E6]" },
  { name: "Quechua", top: "35%", left: "80%", duration: "15s", delay: "-6.5s", size: "text-sm sm:text-base", anim: 2, color: "text-[#5FD0DC]" },
  { name: "Guarani", top: "48%", left: "12%", duration: "9s", delay: "-2.5s", size: "text-sm", anim: 1, color: "text-[#DDF3F5]" },
  { name: "Nahuatl", top: "55%", left: "40%", duration: "12.5s", delay: "-8.5s", size: "text-lg sm:text-xl", anim: 3, color: "text-white" },
  { name: "Maori", top: "50%", left: "65%", duration: "13.5s", delay: "-3.5s", size: "text-sm sm:text-base", anim: 2, color: "text-[#5FD0DC]" },
  { name: "Cherokee", top: "58%", left: "90%", duration: "11s", delay: "-9.5s", size: "text-sm", anim: 1, color: "text-[#CFC9E6]" },
  { name: "Tagalog", top: "65%", left: "22%", duration: "14s", delay: "-1.5s", size: "text-base sm:text-lg", anim: 2, color: "text-white" },
  { name: "Uyghur", top: "70%", left: "48%", duration: "10s", delay: "-6s", size: "text-sm", anim: 1, color: "text-[#DDF3F5]" },
  { name: "Tibetan", top: "68%", left: "72%", duration: "15s", delay: "-12s", size: "text-sm sm:text-base", anim: 2, color: "text-[#CFC9E6]" },
  { name: "Maithili", top: "75%", left: "8%", duration: "9.5s", delay: "-4s", size: "text-sm", anim: 1, color: "text-[#DDF3F5]" },
  { name: "Sinhala", top: "80%", left: "33%", duration: "12s", delay: "-7.5s", size: "text-base sm:text-lg", anim: 3, color: "text-[#5FD0DC]" },
  { name: "Khmer", top: "85%", left: "58%", duration: "13s", delay: "-10.5s", size: "text-sm", anim: 1, color: "text-[#CFC9E6]" },
  { name: "Lao", top: "78%", left: "82%", duration: "11.5s", delay: "-2.8s", size: "text-sm sm:text-base", anim: 2, color: "text-white" },
  { name: "Fula", top: "90%", left: "15%", duration: "14.5s", delay: "-5.5s", size: "text-sm", anim: 1, color: "text-[#5FD0DC]" },
  { name: "Bambara", top: "92%", left: "42%", duration: "10.5s", delay: "-8s", size: "text-base sm:text-lg", anim: 2, color: "text-white" },
  { name: "Tigrinya", top: "88%", left: "65%", duration: "13.5s", delay: "-3s", size: "text-sm", anim: 1, color: "text-[#DDF3F5]" },
  { name: "Kinyarwanda", top: "95%", left: "88%", duration: "12s", delay: "-11.5s", size: "text-sm sm:text-base", anim: 3, color: "text-[#5FD0DC]" },
];

const SAMPLE_PUBLICATIONS = [
  {
    _id: '1',
    title: 'Activation Editing for Low-Resource Cross-Lingual Machine Translation: Does JoLA Transfer?',
    type: 'poster' as const,
    researchArea: 'translation',
    authors: ['Joy Olusanya', 'Erika Germinario', 'Pooja Srinivas', 'Praveenkumar Kondikoppa', 'Shreyas Jagadeep Shete', 'Steven Lawrence Fernandes'],
    venue: 'WiML Symposium @ ICML 2026',
    year: 2026,
    description: 'First evaluation of JoLA for translating Yorùbá dialects and Nigerian Pidgin into English.',
    posterImage: { url: '/images/jola-poster.jpg' },
  },
  {
    _id: '2',
    title: 'YorGe-CS: A Human-Validated Yoruba-German Code-Switched Corpus for Machine Translation Models',
    type: 'paper' as const,
    researchArea: 'code-switching',
    authors: ['Joy Olusanya', 'Alimot Ekundayo Omolaja', 'Quadri Yahya', 'Opeyemi Osakuade', 'Abiodun Awokoya', 'Ganiyat Afolabi', 'Olajumoke Oluwatosin Adebayo', 'Ikeoluwa Sarah Oladimeji', 'Abiola Akorede Alex', 'Yusuf Ismail Abayomi', 'Praise Tolulope Adeyemi'],
    venue: 'arXiv',
    year: 2026,
    status: 'under-review',
    description: 'A human-validated corpus of Yoruba-German code-switched text for training and evaluating machine translation models.',
  },
];

export default async function ResearchPage() {
  let publications = [];
  try {
    publications = await client.fetch(RESEARCH_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    // Use sample data if Sanity is unavailable
    publications = SAMPLE_PUBLICATIONS;
  }

  // If no publications from Sanity, use samples
  if (publications.length === 0) {
    publications = SAMPLE_PUBLICATIONS;
  }

  return (
    <ResearchPageClient
      publications={publications}
      languages={floatingLanguages}
    />
  );
}
