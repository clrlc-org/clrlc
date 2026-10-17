'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/Motion';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2E2357] to-[#1F6F86] pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5FD0DC] bg-white/5 border border-[#5FD0DC]/20">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FD0DC]"></span>
              Contact us
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="italic text-[#5FD0DC]">Let's</span> talk
            </h1>
            <p className="text-xl text-[#CFC9E6]">Whether you are a researcher, a native speaker who wants to contribute, or an organisation interested in our work, we would love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Enquiries and collaborations</h2>
                  <p className="text-slate-600">For questions about our research, community, events or publications.</p>
                </div>
                <div className="space-y-4">
                  <a href="mailto:info@clrlc.org" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-[#1898A8]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1898A8]/30 transition-colors">
                      <Mail className="w-5 h-5 text-[#1898A8]" />
                    </div>
                    <span className="text-[#1898A8] hover:underline font-medium">info@clrlc.org</span>
                  </a>
                  <a href="https://linktr.ee/CLRLC_Org" target="_blank" rel="noreferrer">
                    <Button className="bg-[#1898A8] text-white rounded-full px-6 hover:bg-[#1898A8]/90 flex items-center gap-2">
                      Find all our links
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="border border-[#D9D9D9] rounded-3xl p-10 bg-white">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-900 font-semibold mb-2">Thank you!</p>
                    <p className="text-green-800">Your message has been sent. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Full name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1898A8]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Email address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1898A8]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Message <span className="text-red-500">*</span></label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1898A8]" rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-[#1898A8] text-white rounded-full py-3 font-semibold hover:bg-[#1898A8]/90">Send message</Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/partnerships" className="inline-flex items-center gap-2 text-slate-900 hover:text-[#1898A8] transition-colors group">
              <span className="text-sm">Interested in partnering with us? Visit our Partner With Us page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
