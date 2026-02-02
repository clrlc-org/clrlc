import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">CLRLC</h3>
            <p className="text-sm text-muted-foreground">
              Advancing the representation of low-resource languages and cultures in AI.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/research" className="hover:text-primary">Research</Link></li>
              <li><Link href="/events" className="hover:text-primary">Events</Link></li>
              <li><Link href="/team" className="hover:text-primary">Team</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-semibold mb-4">Connect</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/community" className="hover:text-primary">Community</Link></li>
                <li><a href="https://x.com/clrlc_center" target="_blank" rel="noreferrer" className="hover:text-primary">X (Twitter)</a></li>
                <li><a href="https://github.com/clrlc-org" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a></li>
                <li><a href="https://www.linkedin.com/company/center-for-low-resource-languages-and-culture/" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a></li>
             </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary">Get in Touch</Link></li>
              <li>Email: clrlc.center@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Center for Low-Resource Languages & Cultures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
