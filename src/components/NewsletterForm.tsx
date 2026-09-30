'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface NewsletterFormProps {
  variant?: 'light' | 'dark';
}

export function NewsletterForm({ variant = 'light' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Open Substack subscribe page with email in new tab
    const substackUrl = `https://clrlcorg.substack.com/subscribe?email=${encodeURIComponent(email)}`;
    window.open(substackUrl, '_blank', 'noopener,noreferrer');

    // Reset form
    setEmail('');
    setIsSubmitting(false);
  };

  const isDark = variant === 'dark';
  const inputBgClass = isDark ? 'bg-white/10 text-white placeholder-white/60' : 'bg-white text-slate-900 placeholder-slate-400';
  const inputBorderClass = isDark ? 'border-white/20 focus:border-white/40' : 'border-slate-200 focus:border-primary';
  const errorTextClass = isDark ? 'text-red-200' : 'text-red-600';
  const labelClass = isDark ? 'text-white/90' : 'text-slate-600';

  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmit} className="w-full max-w-[480px]">
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isSubmitting}
              className={`flex-1 px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 ${inputBgClass} ${inputBorderClass}`}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: '#FF6719',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5570F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF6719';
              }}
              className="px-6 py-3 text-white font-semibold rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap md:whitespace-nowrap w-full md:w-auto"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {error && (
            <p className={`text-sm text-center ${errorTextClass}`}>
              {error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
