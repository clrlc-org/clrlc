'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerContainer } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Partnerships - CLRLC',
  description: 'Partner with CLRLC to advance inclusive AI for low-resource languages.',
};

export default function PartnershipsPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    helpType: 'Funding or sponsorship',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setFormData({ name: '', organisation: '', email: '', helpType: 'Funding or sponsorship', message: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2E2357] to-[#1F6F86] pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5FD0DC] bg-white/5 border border-[#5FD0DC]/20">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FD0DC]"></span>
              Partner with CLRLC
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Help us build AI for <span className="italic text-[#5FD0DC]">every low-resource language</span>
            </h1>

            <p className="text-xl text-[#CFC9E6] max-w-2xl">
              We work with native speakers, linguists and researchers to create the data, benchmarks and models that low-resource languages need. Our work depends on partners who share that goal.
            </p>

            <div className="flex items-center gap-4 flex-wrap pt-4">
              <Button
                size="lg"
                className="bg-white text-[#2E2357] rounded-full px-8 hover:bg-white/90"
                asChild
              >
                <a href="#contact">Partner with us</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white rounded-full px-8 hover:bg-white/10"
                asChild
              >
                <Link href="/research">See our research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS ROW */}
      <section className="py-16 bg-white border-b border-[#D9D9D9]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Community members' },
              { number: '5+', label: 'Continents' },
              { number: '10+', label: 'Languages' },
              { number: '50+', label: 'Contributors to Langture-Bench' },
            ].map((stat, idx) => (
              <FadeIn key={idx}>
                <div className="rounded-lg border border-[#D9D9D9] p-6 text-center bg-white">
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. WHY WE EXIST */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1898A8] bg-white/5 border border-[#1898A8]/20 mb-6">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1898A8]"></span>
                Why we exist
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                Most languages are left behind by AI
              </h2>
              <div className="space-y-6 text-lg text-slate-700 max-w-3xl">
                <p>
                  The vast majority of AI systems are built for just a handful of high-resource languages. Millions of people speak languages that have little to no presence in AI datasets, models, or research. This isn't a limitation—it's a choice that we can change.
                </p>
                <p>
                  CLRLC closes this gap through community-led data collection, culturally grounded benchmarks, and inclusive models that work for African and other low-resource languages. We partner with native speakers, linguists, and researchers who understand their languages and cultures best.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. RECOGNITION STRIP */}
      <section className="py-16 bg-white border-y border-[#D9D9D9]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold text-slate-900">Recognition</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                {[
                  'WiML Symposium @ ICML 2026',
                  'CLRLC-LLMs Workshop @ NeurIPS 2025',
                  'Workshop at Deep Learning Indaba 2026',
                ].map((badge, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. INSTITUTIONS */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-slate-900 mb-16">Institutions we have partnered with</h2>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: '[Partner name 1]', type: 'Partnership type and year', placeholder: true },
                { name: '[Partner name 2]', type: 'Partnership type and year', placeholder: true },
                { name: '[Partner name 3]', type: 'Partnership type and year', placeholder: true },
                { name: '[Partner name 4]', type: 'Partnership type and year', placeholder: true },
                { name: '[Partner name 5]', type: 'Partnership type and year', placeholder: true },
                { name: '[Partner name 6]', type: 'Partnership type and year', placeholder: true },
              ].map((partner, idx) => (
                <FadeIn key={idx}>
                  <div className="border border-[#D9D9D9] rounded-xl p-8 bg-white/50 backdrop-blur-sm hover:bg-white transition-colors">
                    <div className="h-16 bg-slate-200 rounded-lg mb-6 flex items-center justify-center text-sm text-slate-500">
                      [Logo]
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{partner.name}</h3>
                    <p className="text-sm text-slate-600">{partner.type}</p>
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      {/* 6. WAYS TO HELP */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-slate-900 mb-16">Every contribution moves this forward</h2>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Fund data collection',
                  description: 'Pay native speakers and linguists to collect, transcribe and validate language data.',
                },
                {
                  title: 'Fund compute',
                  description: 'GPU credits to train and evaluate models for low-resource languages.',
                },
                {
                  title: 'Support events and mentorship',
                  description: 'Keep our workshops, webinars and mentorship programme free and open.',
                },
                {
                  title: 'General support',
                  description: 'Unrestricted support for tools, infrastructure and operations.',
                },
              ].map((item, idx) => (
                <FadeIn key={idx}>
                  <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-[#1898A8]/20 rounded-lg flex items-center justify-center mb-6">
                      <div className="w-6 h-6 border-2 border-[#1898A8] rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      {/* 7. CONTACT FORM */}
      <section id="contact" className="py-24 bg-[#F7F4EE]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1898A8] bg-white border border-[#1898A8]/20 mb-6">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1898A8]"></span>
                Get in touch
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Partner with CLRLC</h2>
              <p className="text-lg text-slate-600">Tell us how you would like to work with us.</p>
            </div>

            {formStatus === 'success' ? (
              <FadeIn>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-lg font-semibold text-green-900 mb-2">Thank you!</div>
                  <p className="text-green-800">We will get back to you soon.</p>
                </div>
              </FadeIn>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1898A8]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Organisation</label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1898A8]"
                      placeholder="Your organisation"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1898A8]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    How would you like to help? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="helpType"
                    value={formData.helpType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1898A8]"
                  >
                    <option>Funding or sponsorship</option>
                    <option>Compute credits</option>
                    <option>Research collaboration</option>
                    <option>Events and mentorship</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1898A8]"
                    rows={5}
                    placeholder="Tell us more about your partnership interest..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1898A8] text-white rounded-full py-3 font-semibold hover:bg-[#1898A8]/90"
                >
                  Send message
                </Button>

                <div className="text-center pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Prefer email? <a href="mailto:info@clrlc.org" className="font-semibold text-[#1898A8] hover:underline">info@clrlc.org</a>
                  </p>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* 8. CLOSING BAND */}
      <section className="py-24 bg-gradient-to-r from-[#2E2357] to-[#1F6F86] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-5xl font-bold mb-8">Let's build this together</h2>
            <Button
              size="lg"
              className="bg-white text-[#2E2357] rounded-full px-8 hover:bg-white/90"
              asChild
            >
              <a href="#contact">Partner with us</a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
