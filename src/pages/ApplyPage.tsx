import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Check, AlertCircle, Loader2 } from 'lucide-react';
import { SuccessModal } from '../components/SuccessModal';

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  role: string;
  companyName: string;
  industry: string;
  revenueStage: string;
  goals: string[];
  introduction: string;
  referralSource: string;
  agreement: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    role: '',
    companyName: '',
    industry: '',
    revenueStage: '',
    goals: [],
    introduction: '',
    referralSource: '',
    agreement: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const roleOptions = ['Founder', 'Partner', 'Director'];
  
  const industryOptions = [
    'Technology / SaaS',
    'E-commerce / D2C',
    'Fintech',
    'Healthcare / Medtech',
    'Education / Edtech',
    'Consumer Services',
    'B2B Services',
    'Manufacturing',
    'Social Impact',
    'Media / Entertainment',
    'Real Estate / PropTech',
    'Food & Beverage',
    'Consulting',
    'Retail',
    'Logistics',
    'AgriTech',
    'Other'
  ];

  const revenueOptions = [
    '₹2 Crores - ₹3 Crores',
    '₹3 Crores - ₹5 Crores',
    '₹5 Crores and Above'
  ];

  const goalOptions = [
    'Business Growth',
    'Learning & Skill Development',
    'Mentor Support',
    'Capital Connect / Fundraising',
    'Others'
  ];

  const referralOptions = [
    'Friend / Referral',
    'Meta (Facebook)',
    'Instagram',
    'WhatsApp',
    'LinkedIn',
    'Google Search',
    'Event / Conference',
    'Other'
  ];

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select your industry';
    }

    if (!formData.revenueStage) {
      newErrors.revenueStage = 'Please select revenue stage';
    }

    if (formData.goals.length === 0) {
      newErrors.goals = 'Please select at least one option';
    }

    if (!formData.introduction.trim()) {
      newErrors.introduction = 'Please tell us about yourself';
    } else if (formData.introduction.length > 500) {
      newErrors.introduction = 'Maximum 500 characters allowed';
    }

    if (!formData.referralSource) {
      newErrors.referralSource = 'Please select how you heard about us';
    }

    if (!formData.agreement) {
      newErrors.agreement = 'You must confirm the information is accurate';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      const element = document.getElementById(firstError);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const characterCount = formData.introduction.length;
  const maxCharacters = 500;
  const isNearLimit = characterCount >= 450;
  const isOverLimit = characterCount > maxCharacters;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
        {/* Header */}
        <div className="bg-white border-b border-platinum/30">
          <div className="container mx-auto px-4 py-6">
            <button onClick={() => (window as any).navigateTo?.('home')} className="text-primary-blue hover:text-royal-gold transition-colors inline-flex items-center gap-2">
              <span>←</span> <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-royal-gold text-xs font-medium tracking-wider uppercase mb-4">
              JOIN HEH
            </div>
            <h1 className="font-playfair text-3xl lg:text-5xl font-bold text-primary-blue mb-4">
              Ready to Join Hyderabad's Most Ambitious Entrepreneurs?
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Express your interest in HEH membership. We'll review your application and get back to you within 48 hours.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="container mx-auto px-4 pb-20">
          <Card className="max-w-2xl mx-auto p-6 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-primary-blue mb-6">Personal Information</h2>
                
                {/* Full Name */}
                <div className="mb-5" id="fullName">
                  <label htmlFor="fullName" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name <span className="text-royal-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full h-12 px-4 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                    }`}
                  />
                  {errors.fullName && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-5" id="email">
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address <span className="text-royal-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className={`w-full h-12 px-4 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                    }`}
                  />
                  {!errors.email && (
                    <p className="mt-1 text-xs text-charcoal/60">We'll use this to contact you</p>
                  )}
                  {errors.email && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-5" id="phone">
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number <span className="text-royal-gold">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-20 h-12 px-2 border border-platinum rounded-lg focus:outline-none focus:ring-2 focus:border-royal-gold focus:ring-royal-gold/20"
                    >
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                      placeholder="9876543210"
                      className={`flex-1 h-12 px-4 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                      }`}
                    />
                  </div>
                  {!errors.phone && (
                    <p className="mt-1 text-xs text-charcoal/60">10-digit mobile number</p>
                  )}
                  {errors.phone && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h2 className="text-xl font-semibold text-primary-blue mb-6">Professional Information</h2>
                
                {/* Role */}
                <div className="mb-5" id="role">
                  <label htmlFor="role" className="block text-sm font-medium text-charcoal mb-2">
                    Current Role <span className="text-royal-gold">*</span>
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className={`w-full h-12 px-4 border rounded-lg transition-all focus:outline-none focus:ring-2 appearance-none bg-white ${
                      errors.role
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                    }`}
                  >
                    <option value="">Select your role</option>
                    {roleOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.role && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.role}</span>
                    </div>
                  )}
                </div>

                {/* Company Name */}
                <div className="mb-5" id="companyName">
                  <label htmlFor="companyName" className="block text-sm font-medium text-charcoal mb-2">
                    Company/Venture Name (Legal Entity) <span className="text-royal-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="E.g., ABC Technologies Pvt. Ltd."
                    className={`w-full h-12 px-4 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                      errors.companyName
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                    }`}
                  />
                  {!errors.companyName && (
                    <p className="mt-1 text-xs text-charcoal/60">Enter the registered legal name</p>
                  )}
                  {errors.companyName && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.companyName}</span>
                    </div>
                  )}
                </div>

                {/* Industry */}
                <div className="mb-5" id="industry">
                  <label htmlFor="industry" className="block text-sm font-medium text-charcoal mb-2">
                    Industry <span className="text-royal-gold">*</span>
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className={`w-full h-12 px-4 border rounded-lg transition-all focus:outline-none focus:ring-2 appearance-none bg-white ${
                      errors.industry
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                    }`}
                  >
                    <option value="">Select your industry</option>
                    {industryOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.industry && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.industry}</span>
                    </div>
                  )}
                </div>

                {/* Revenue Stage */}
                <div className="mb-5" id="revenueStage">
                  <label htmlFor="revenueStage" className="block text-sm font-medium text-charcoal mb-2">
                    Annual Revenue Stage <span className="text-royal-gold">*</span>
                  </label>
                  <select
                    id="revenueStage"
                    value={formData.revenueStage}
                    onChange={(e) => setFormData({ ...formData, revenueStage: e.target.value })}
                    className={`w-full h-12 px-4 border rounded-lg transition-all focus:outline-none focus:ring-2 appearance-none bg-white ${
                      errors.revenueStage
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                    }`}
                  >
                    <option value="">Select revenue range</option>
                    {revenueOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.revenueStage && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.revenueStage}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Your Goals */}
              <div>
                <h2 className="text-xl font-semibold text-primary-blue mb-6">What You're Looking For</h2>
                
                {/* Goals Checkboxes */}
                <div className="mb-5" id="goals">
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    What are you looking for at HEH? <span className="text-royal-gold">*</span>
                  </label>
                  <p className="text-xs text-charcoal/60 mb-4">Select all that apply</p>
                  <div className="space-y-3">
                    {goalOptions.map(goal => (
                      <label key={goal} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={formData.goals.includes(goal)}
                            onChange={() => handleGoalToggle(goal)}
                            className="w-5 h-5 border-2 border-platinum rounded appearance-none checked:bg-royal-gold checked:border-royal-gold transition-all cursor-pointer focus:ring-2 focus:ring-royal-gold/20"
                          />
                          {formData.goals.includes(goal) && (
                            <Check className="w-3 h-3 text-white absolute pointer-events-none" />
                          )}
                        </div>
                        <span className="text-charcoal group-hover:text-royal-gold transition-colors">
                          {goal}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.goals && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.goals}</span>
                    </div>
                  )}
                </div>

                {/* Introduction */}
                <div className="mb-5" id="introduction">
                  <label htmlFor="introduction" className="block text-sm font-medium text-charcoal mb-2">
                    Tell us about yourself <span className="text-royal-gold">*</span>
                  </label>
                  <textarea
                    id="introduction"
                    value={formData.introduction}
                    onChange={(e) => {
                      if (e.target.value.length <= maxCharacters) {
                        setFormData({ ...formData, introduction: e.target.value });
                      }
                    }}
                    placeholder="In 2-3 sentences, share your entrepreneurial journey and what you hope to gain from the HEH community..."
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 resize-y ${
                      errors.introduction
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                    }`}
                  />
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-xs text-charcoal/60">Maximum 500 characters</p>
                    <p className={`text-xs ${
                      isOverLimit ? 'text-red-500' : isNearLimit ? 'text-royal-gold' : 'text-charcoal/60'
                    }`}>
                      {characterCount}/{maxCharacters}
                    </p>
                  </div>
                  {errors.introduction && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.introduction}</span>
                    </div>
                  )}
                </div>

                {/* Referral Source */}
                <div className="mb-5" id="referralSource">
                  <label htmlFor="referralSource" className="block text-sm font-medium text-charcoal mb-2">
                    How did you hear about HEH? <span className="text-royal-gold">*</span>
                  </label>
                  <select
                    id="referralSource"
                    value={formData.referralSource}
                    onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                    className={`w-full h-12 px-4 border rounded-lg transition-all focus:outline-none focus:ring-2 appearance-none bg-white ${
                      errors.referralSource
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-platinum focus:border-royal-gold focus:ring-royal-gold/20'
                    }`}
                  >
                    <option value="">Select an option</option>
                    {referralOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.referralSource && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.referralSource}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Agreement */}
              <div id="agreement">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input
                      type="checkbox"
                      checked={formData.agreement}
                      onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                      className="w-5 h-5 border-2 border-platinum rounded appearance-none checked:bg-royal-gold checked:border-royal-gold transition-all cursor-pointer focus:ring-2 focus:ring-royal-gold/20"
                    />
                    {formData.agreement && (
                      <Check className="w-3 h-3 text-white absolute pointer-events-none" />
                    )}
                  </div>
                  <span className="text-sm text-charcoal/80 leading-relaxed">
                    I confirm that the information provided is accurate and I'm genuinely interested in joining HEH's entrepreneurship community. <span className="text-royal-gold">*</span>
                  </span>
                </label>
                {errors.agreement && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.agreement}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-royal-gold hover:bg-royal-gold/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>

                <p className="text-xs text-center text-charcoal/60 mt-4 leading-relaxed">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="text-primary-blue hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms" className="text-primary-blue hover:underline">Terms of Service</a>.
                </p>

                <p className="text-sm text-center text-charcoal/70 mt-6">
                  Questions? Email us at{' '}
                  <a href="mailto:heh@entrepreneurhub.in" className="text-royal-gold hover:underline">
                    hello@entrepreneurhub.in
                  </a>
                  {' '}or call{' '}
                  <a href="tel:+919999999999" className="text-royal-gold hover:underline">
                    +91 6300799266
                  </a>
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal
          email={formData.email}
          onClose={() => {
            setShowSuccess(false);
            window.location.href = '/';
          }}
        />
      )}
    </>
  );
}