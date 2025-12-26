import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ArrowLeft, Lock, Shield } from 'lucide-react';

export default function LoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setStep('otp');
      }, 1500);
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOTPKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // Handle successful login
        alert('Login successful! (Demo)');
      }, 1500);
    }
  };

  const handleResendOTP = () => {
    setOtp(['', '', '', '', '', '']);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('OTP resent successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-heh-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={() => (window as any).navigateTo?.('home')}
            className="flex items-center text-charcoal hover:text-royal-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>

          {/* Login Card */}
          <div className="bg-white rounded-xl shadow-xl border border-platinum p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-playfair text-primary-blue mb-2">
                Member Login
              </h1>
              <p className="text-charcoal/70">
                {step === 'phone'
                  ? 'Enter your registered mobile number'
                  : 'Enter the OTP sent to your mobile'}
              </p>
            </div>

            {/* Phone Number Step */}
            {step === 'phone' && (
              <form onSubmit={handleSendOTP} className="space-y-6">
                <div>
                  <label htmlFor="phone" className="block text-charcoal font-medium mb-2">
                    Mobile Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-platinum bg-gray-50 text-charcoal">
                      +91
                    </span>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="9876543210"
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 10) setPhoneNumber(value);
                      }}
                      className="rounded-l-none"
                      required
                    />
                  </div>
                  {phoneNumber.length > 0 && phoneNumber.length !== 10 && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit mobile number</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-royal-gold hover:bg-royal-gold/90 text-white"
                  disabled={phoneNumber.length !== 10 || isLoading}
                >
                  {isLoading ? 'Sending OTP...' : 'Send OTP'}
                </Button>

                <div className="flex items-center justify-center space-x-2 text-sm text-charcoal/60">
                  <Shield className="w-4 h-4" />
                  <span>Secure authentication via OTP</span>
                </div>
              </form>
            )}

            {/* OTP Verification Step */}
            {step === 'otp' && (
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div>
                  <label className="block text-charcoal font-medium mb-2 text-center">
                    Enter 6-Digit OTP
                  </label>
                  <p className="text-sm text-charcoal/60 text-center mb-4">
                    Sent to +91 {phoneNumber}
                    <button
                      type="button"
                      onClick={() => setStep('phone')}
                      className="text-royal-gold hover:underline ml-2"
                    >
                      Change
                    </button>
                  </p>

                  <div className="flex justify-center space-x-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOTPChange(index, e.target.value)}
                        onKeyDown={(e) => handleOTPKeyDown(index, e)}
                        className="w-12 h-12 text-center border-2 border-platinum rounded-lg focus:border-royal-gold focus:outline-none transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-royal-gold hover:bg-royal-gold/90 text-white"
                  disabled={otp.join('').length !== 6 || isLoading}
                >
                  {isLoading ? 'Verifying...' : 'Verify & Login'}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-charcoal/60">
                    Didn't receive the OTP?{' '}
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="text-royal-gold hover:underline font-medium"
                      disabled={isLoading}
                    >
                      Resend OTP
                    </button>
                  </p>
                </div>
              </form>
            )}

            {/* Help Text */}
            <div className="mt-8 pt-6 border-t border-platinum">
              <p className="text-sm text-charcoal/60 text-center">
                Having trouble logging in?{' '}
                <a href="/contact" className="text-royal-gold hover:underline font-medium">
                  Contact Support
                </a>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-charcoal/60 text-sm">
              Not a member yet?{' '}
              <a href="https://forms.gle/nCFCD5x5aGdHeBPk6" target="_blank" rel="noopener noreferrer">
                <button
                  // onClick={() => (window as any).navigateTo?.('apply')}
                  className="text-royal-gold hover:underline font-medium"
                >
                  Apply for Membership
                </button>
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
