import { Check } from 'lucide-react';
import { Button } from './ui/button';

interface SuccessModalProps {
  email: string;
  onClose: () => void;
}

export function SuccessModal({ email, onClose }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 lg:p-12 animate-in zoom-in-95 duration-300">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary-blue text-center mb-4">
          🎉 Application Received!
        </h2>

        {/* Subheading */}
        <p className="text-lg text-charcoal/80 text-center mb-8">
          Thank you for your interest in joining Hyderabad Entrepreneurs Hub.
        </p>

        {/* What's Next Section */}
        <div className="bg-soft-blue/30 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-primary-blue mb-4 text-center">What's Next?</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center text-white font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-primary-blue mb-1">Application Review</h4>
                <p className="text-sm text-charcoal/70">
                  Our team will review your application within 48 hours
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center text-white font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-primary-blue mb-1">We'll Reach Out</h4>
                <p className="text-sm text-charcoal/70">
                  If selected, we'll schedule a quick intro call
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center text-white font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-primary-blue mb-1">Welcome Aboard</h4>
                <p className="text-sm text-charcoal/70">
                  After approval, we'll send onboarding details
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email Confirmation */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-charcoal/80">
            ✉️ Confirmation Email Sent
          </p>
          <p className="text-sm text-charcoal/60 mt-1">
            Check your inbox at <span className="font-medium text-primary-blue">{email}</span> for next steps.
          </p>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <Button
            onClick={onClose}
            className="w-full h-12 bg-royal-gold hover:bg-royal-gold/90 text-white font-semibold"
          >
            Back to Homepage
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('https://www.linkedin.com', '_blank')}
            className="w-full h-12 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
          >
            Follow Us on LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}
