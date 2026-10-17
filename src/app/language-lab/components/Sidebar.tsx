'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Mic2, FileText, Files, Database, Heart, Settings, LogOut } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/language-lab', icon: Home },
  { label: 'Speech', href: '/language-lab/speech', icon: Mic2 },
  { label: 'Translate', href: '/language-lab/translate', icon: FileText },
  { label: 'My files', href: '/language-lab/my-files', icon: Files },
  { label: 'Datasets', href: '/language-lab/datasets', icon: Database },
  { label: 'Contribute', href: '/language-lab/contribute', icon: Heart },
  { label: 'Settings', href: '/language-lab/settings', icon: Settings },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 hover:bg-slate-100 rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-60 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 z-40 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
              <span className="text-lg font-bold text-primary">🌍</span>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">CLRLC</div>
              <div className="text-xs text-slate-500">Language Lab</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Usage Meter */}
        <div className="p-4 border-t border-slate-200 space-y-3">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-900">Free plan</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Pages</span>
                <span>8 of 20</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: '40%' }}
                />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Today's minutes</span>
                <span>4 of 10</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: '40%' }}
                />
              </div>
            </div>
          </div>

          <Link
            href="https://www.clrlc.org"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors w-full"
          >
            <LogOut className="w-4 h-4" />
            Back to clrlc.org
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
