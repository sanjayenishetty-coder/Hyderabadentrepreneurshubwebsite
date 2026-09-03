import { Lock } from 'lucide-react';

interface LockedOverlayProps {
  children: React.ReactNode;
  /** Clip the blurred content to roughly one screen so long pages don't scroll endlessly */
  clip?: boolean;
  title?: string;
  message?: string;
  /** Optional call-to-action rendered inside the lock card (stays clickable) */
  cta?: React.ReactNode;
}

// Note: this project ships a pre-generated Tailwind CSS file, so utilities not
// already in src/index.css (blur-md, max-h-*, select-none, ...) are inlined here.
export function LockedOverlay({
  children,
  clip = false,
  title = 'Launching Soon',
  message = 'This section is under wraps for now. Stay tuned — we are launching it soon!',
  cta
}: LockedOverlayProps) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none"
        aria-hidden="true"
        style={{
          filter: 'blur(10px)',
          userSelect: 'none',
          ...(clip ? { maxHeight: '80vh', overflow: 'hidden' } : {})
        }}
      >
        {children}
      </div>

      {/* Lock overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
      >
        <div
          className="sticky top-0 flex h-full items-center justify-center p-6"
          style={{ maxHeight: '100vh' }}
        >
          <div
            className="pointer-events-auto bg-white/95 backdrop-blur-sm border border-platinum shadow-2xl rounded-2xl px-8 max-w-md text-center"
            style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-royal-gold/10">
              <Lock className="h-8 w-8 text-royal-gold" />
            </div>
            <h3 className="font-playfair text-3xl font-bold text-primary-blue mb-3">
              {title}
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              {message}
            </p>
            {cta && <div className="mt-6">{cta}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
