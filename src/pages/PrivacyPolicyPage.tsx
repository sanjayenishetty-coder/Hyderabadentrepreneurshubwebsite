import { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChevronUp, Download } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowBackToTop(scrollPosition > pageHeight * 0.3);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'information-we-collect', title: '1. Information We Collect' },
    { id: 'how-we-use', title: '2. How We Use Your Information' },
    { id: 'how-we-share', title: '3. How We Share Your Information' },
    { id: 'your-rights', title: '4. Your Privacy Rights and Choices' },
    { id: 'data-security', title: '5. Data Security' },
    { id: 'data-retention', title: '6. Data Retention' },
    { id: 'childrens-privacy', title: "7. Children's Privacy" },
    { id: 'international-transfers', title: '8. International Data Transfers' },
    { id: 'third-party-links', title: '9. Third-Party Links' },
    { id: 'updates', title: '10. Updates to This Privacy Policy' },
    { id: 'contact', title: '11. Contact Us' },
    { id: 'consent', title: '12. Consent' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white rounded-xl border border-platinum p-6">
              <h3 className="text-sm font-semibold text-charcoal mb-4 uppercase tracking-wide">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-royal-gold/10 text-royal-gold font-medium'
                        : 'text-charcoal/70 hover:text-royal-gold hover:bg-royal-gold/5'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <div className="bg-white rounded-2xl shadow-sm border border-platinum p-6 lg:p-10">
              {/* Header */}
              <div className="mb-10 pb-6 border-b border-platinum">
                <h1 className="text-4xl lg:text-5xl font-bold text-primary-blue mb-3">
                  Privacy Policy
                </h1>
                <p className="text-sm text-charcoal/60 mb-1">
                  Last Updated: December 20, 2024
                </p>
                <p className="text-sm text-charcoal/60">
                  Effective Date: December 20, 2024
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-10 space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  At Hyderabad Entrepreneurs Hub ("HEH", "we", "us", or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (entrepreneurhub.in/hyderabad), use our services, or engage with our community.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
                <p>
                  We reserve the right to make changes to this Privacy Policy at any time. We will notify you of any changes by updating the "Last Updated" date at the top of this Privacy Policy. Your continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.
                </p>
              </div>

              {/* Section 1 */}
              <section id="information-we-collect" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  1. INFORMATION WE COLLECT
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">
                      1.1 Personal Information You Provide
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-3">
                      We collect information that you voluntarily provide to us when you:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-charcoal mb-2">During Membership Application:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Full name</li>
                          <li>Email address</li>
                          <li>Phone number</li>
                          <li>LinkedIn profile URL</li>
                          <li>Current role/designation</li>
                          <li>Company or venture name (legal entity)</li>
                          <li>Industry sector</li>
                          <li>Annual revenue stage</li>
                          <li>Professional goals and interests</li>
                          <li>Brief introduction about yourself</li>
                          <li>How you heard about HEH</li>
                          <li>Any other information you choose to provide</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-2">During Account Creation and Use:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Username and password</li>
                          <li>Profile information (bio, photo, company description)</li>
                          <li>Payment information (processed securely through third-party payment processors)</li>
                          <li>Event registration details</li>
                          <li>Communication preferences</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-2">When You Contact Us:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Name, email address, phone number</li>
                          <li>Subject of inquiry</li>
                          <li>Message content</li>
                          <li>Any attachments you send</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-2">Through Community Participation:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Forum posts and comments</li>
                          <li>Event feedback and surveys</li>
                          <li>Content you share in member directories</li>
                          <li>Collaboration and partnership interests</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">
                      1.2 Information Automatically Collected
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-3">
                      When you access our website or use our services, we may automatically collect certain information, including:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-charcoal mb-2">Device and Usage Information:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>IP address</li>
                          <li>Browser type and version</li>
                          <li>Operating system</li>
                          <li>Device type (mobile, tablet, desktop)</li>
                          <li>Pages visited and time spent on pages</li>
                          <li>Referring website addresses</li>
                          <li>Click patterns and navigation paths</li>
                          <li>Date and time of access</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-2">Cookies and Tracking Technologies:</p>
                        <p className="text-charcoal/80 leading-relaxed mb-2 text-sm">
                          We use cookies, web beacons, and similar tracking technologies to:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Remember your preferences and settings</li>
                          <li>Understand how you use our website</li>
                          <li>Improve our services and user experience</li>
                          <li>Deliver personalized content</li>
                          <li>Analyze website traffic and trends</li>
                        </ul>
                        <div className="mt-3 bg-blue-50 border-l-4 border-royal-gold p-3 rounded">
                          <p className="text-sm text-charcoal/80">
                            You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">
                      1.3 Information from Third Parties
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-3">
                      We may receive information about you from:
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-charcoal mb-2">Social Media Platforms:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>LinkedIn profile information (when you connect your account or provide your LinkedIn URL)</li>
                          <li>Professional information available publicly</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-2">Payment Processors:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Transaction confirmations</li>
                          <li>Payment status</li>
                          <li>Billing information (we do not store full credit card details)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-2">Referral Sources:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Information from HEH members who refer you</li>
                          <li>Event partners and collaborators</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-2">Publicly Available Sources:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Professional information available online</li>
                          <li>Company details from public databases</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="how-we-use" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  2. HOW WE USE YOUR INFORMATION
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-5">
                  We use the information we collect for the following purposes:
                </p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      2.1 Membership and Community Management
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Process and evaluate membership applications</li>
                      <li>Create and manage your member account</li>
                      <li>Verify your eligibility for membership</li>
                      <li>Facilitate connections with other members</li>
                      <li>Maintain accurate member directory</li>
                      <li>Communicate membership status and updates</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      2.2 Service Delivery
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Organize and manage events, workshops, and programs</li>
                      <li>Provide co-working space access</li>
                      <li>Facilitate mentorship matching</li>
                      <li>Share business opportunities and partnerships</li>
                      <li>Deliver newsletters and updates</li>
                      <li>Provide customer support</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      2.3 Communication
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Send important notices about your membership</li>
                      <li>Respond to your inquiries and requests</li>
                      <li>Share event invitations and reminders</li>
                      <li>Provide updates about HEH programs and opportunities</li>
                      <li>Distribute community announcements</li>
                      <li>Send marketing communications (with your consent)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      2.4 Improvement and Personalization
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Analyze usage patterns to improve our services</li>
                      <li>Personalize your experience based on your interests</li>
                      <li>Develop new features and programs</li>
                      <li>Conduct research and analytics</li>
                      <li>Measure the effectiveness of our events and programs</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      2.5 Legal and Security
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Comply with legal obligations</li>
                      <li>Enforce our Terms of Service and policies</li>
                      <li>Protect against fraudulent, unauthorized, or illegal activity</li>
                      <li>Resolve disputes</li>
                      <li>Maintain the security and integrity of our platform</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      2.6 Business Operations
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Process payments and manage billing</li>
                      <li>Maintain accurate records</li>
                      <li>Conduct internal business operations</li>
                      <li>Facilitate partnerships with sponsors and service providers</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="how-we-share" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  3. HOW WE SHARE YOUR INFORMATION
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-5">
                  We respect your privacy and do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information in the following circumstances:
                </p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      3.1 Within the HEH Community
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-charcoal mb-2 text-sm">Member Directory:</p>
                        <p className="text-charcoal/80 leading-relaxed mb-2 text-sm">
                          With your consent, we share certain information in our member directory accessible only to other verified HEH members:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Name and photo</li>
                          <li>Company name and role</li>
                          <li>Industry and business description</li>
                          <li>LinkedIn profile (if provided)</li>
                          <li>Areas of expertise or interest</li>
                          <li>Contact preferences</li>
                        </ul>
                        <div className="mt-3 bg-blue-50 border-l-4 border-royal-gold p-3 rounded">
                          <p className="text-sm text-charcoal/80">
                            You can control what information appears in the member directory through your account settings.
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-1 text-sm">Community Platform:</p>
                        <p className="text-charcoal/80 leading-relaxed text-sm">
                          Information you voluntarily share on community forums, event discussions, or collaboration spaces is visible to other members.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      3.2 Service Providers
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-2 text-sm">
                      We engage trusted third-party service providers to perform functions on our behalf, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li><strong>Payment Processing:</strong> Razorpay, Stripe, or other payment gateways</li>
                      <li><strong>Email Services:</strong> Mailchimp, SendGrid for newsletters and communications</li>
                      <li><strong>Cloud Storage:</strong> AWS, Google Cloud for data storage</li>
                      <li><strong>Analytics:</strong> Google Analytics for website performance</li>
                      <li><strong>Event Management:</strong> Eventbrite, Luma for event registration</li>
                      <li><strong>Communication Tools:</strong> WhatsApp Business, Slack for community engagement</li>
                      <li><strong>CRM Systems:</strong> HubSpot, Airtable for member management</li>
                    </ul>
                    <p className="text-charcoal/80 leading-relaxed mt-2 text-sm">
                      These service providers have access to personal information only as necessary to perform their functions and are obligated to maintain confidentiality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      3.3 Event Partners and Sponsors
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-2 text-sm">
                      With your explicit consent, we may share limited information (name, company, email) with:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Event speakers and workshop facilitators</li>
                      <li>Sponsors of specific events you attend</li>
                      <li>Partners offering exclusive member benefits</li>
                    </ul>
                    <p className="text-charcoal/80 leading-relaxed mt-2 text-sm">
                      You can opt out of such sharing for specific events during registration.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      3.4 Business Transfers
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed text-sm">
                      If HEH is involved in a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or prominent notice on our website before your information becomes subject to a different privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      3.5 Legal Requirements
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-2 text-sm">
                      We may disclose your information if required by law or in response to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Legal process (subpoena, court order)</li>
                      <li>Government or regulatory requests</li>
                      <li>Protection of our rights, property, or safety</li>
                      <li>Protection of the rights, property, or safety of our members or the public</li>
                      <li>Investigation of fraud or security issues</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      3.6 With Your Consent
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed text-sm">
                      We may share your information for any other purpose with your explicit consent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="your-rights" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  4. YOUR PRIVACY RIGHTS AND CHOICES
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-5">
                  You have certain rights regarding your personal information:
                </p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      4.1 Access and Correction
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li><strong>Access:</strong> You can request a copy of the personal information we hold about you</li>
                      <li><strong>Correction:</strong> You can update or correct inaccurate information through your account settings or by contacting us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      4.2 Data Portability
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed text-sm">
                      You have the right to receive your personal information in a structured, commonly used, and machine-readable format and transmit it to another controller.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      4.3 Deletion
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-2 text-sm">
                      You can request deletion of your personal information, subject to certain exceptions (legal obligations, legitimate interests, etc.). To request deletion, contact us at <a href="mailto:privacy@entrepreneurhub.in" className="text-royal-gold hover:underline">privacy@entrepreneurhub.in</a>.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-royal-gold p-3 rounded">
                      <p className="font-semibold text-charcoal mb-2 text-sm">Note: Deleting your account will:</p>
                      <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                        <li>Remove you from the member directory</li>
                        <li>Cancel your membership</li>
                        <li>Delete your profile information</li>
                        <li>Remove access to member-only resources</li>
                        <li>Some information may be retained for legal or legitimate business purposes</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      4.4 Opt-Out Rights
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-charcoal mb-1 text-sm">Marketing Communications:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Unsubscribe from newsletters via the link in emails</li>
                          <li>Update email preferences in your account settings</li>
                          <li>Contact us to opt out of specific communications</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-1 text-sm">Member Directory:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Control what information appears in the directory</li>
                          <li>Make your profile private (visible only to admins)</li>
                          <li>Remove yourself from the directory entirely</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-1 text-sm">Cookies:</p>
                        <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                          <li>Manage cookie preferences through your browser settings</li>
                          <li>Opt out of Google Analytics tracking</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      4.5 Object to Processing
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-2 text-sm">
                      You can object to our processing of your personal information for:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Direct marketing purposes</li>
                      <li>Legitimate interests (we will cease unless we have compelling grounds)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      4.6 Restrict Processing
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-2 text-sm">
                      You can request restriction of processing your information in certain circumstances, such as:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                      <li>Contesting accuracy of the information</li>
                      <li>Processing is unlawful but you prefer restriction over deletion</li>
                      <li>We no longer need the data but you need it for legal claims</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="data-security" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  5. DATA SECURITY
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-4 text-sm">
                  We implement appropriate technical and organizational security measures to protect your personal information against:
                </p>

                <ul className="list-disc pl-6 space-y-1 text-charcoal/80 mb-5 text-sm">
                  <li>Unauthorized access, use, or disclosure</li>
                  <li>Accidental loss or destruction</li>
                  <li>Alteration or damage</li>
                </ul>

                <div className="mb-5">
                  <p className="font-semibold text-charcoal mb-2 text-sm">Our security measures include:</p>
                  <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                    <li>Encryption of data in transit (SSL/TLS)</li>
                    <li>Encryption of sensitive data at rest</li>
                    <li>Regular security assessments and audits</li>
                    <li>Access controls and authentication</li>
                    <li>Secure payment processing (PCI DSS compliant)</li>
                    <li>Employee training on data protection</li>
                    <li>Regular backups and disaster recovery procedures</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded mb-4">
                  <p className="text-sm text-charcoal/80 mb-2">
                    <strong>Please note:</strong> No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-charcoal mb-2 text-sm">Your Responsibility:</p>
                  <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                    <li>Keep your password confidential</li>
                    <li>Log out after using shared devices</li>
                    <li>Report any unauthorized access immediately</li>
                    <li>Be cautious about information you share in public forums</li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section id="data-retention" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  6. DATA RETENTION
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-4 text-sm">
                  We retain your personal information for as long as necessary to:
                </p>

                <ul className="list-disc pl-6 space-y-1 text-charcoal/80 mb-5 text-sm">
                  <li>Provide our services</li>
                  <li>Fulfill the purposes outlined in this Privacy Policy</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce our agreements</li>
                </ul>

                <div className="mb-4">
                  <p className="font-semibold text-charcoal mb-2 text-sm">Retention Periods:</p>
                  <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                    <li><strong>Active Members:</strong> For the duration of your membership plus 2 years</li>
                    <li><strong>Inactive/Former Members:</strong> Up to 5 years for business and legal purposes</li>
                    <li><strong>Application Data:</strong> Rejected applications retained for 1 year</li>
                    <li><strong>Financial Records:</strong> 7 years (as required by law)</li>
                    <li><strong>Marketing Data:</strong> Until you opt out or 3 years of inactivity</li>
                    <li><strong>Website Analytics:</strong> Typically 26 months (Google Analytics default)</li>
                  </ul>
                </div>

                <p className="text-charcoal/80 leading-relaxed text-sm">
                  After the retention period, we will securely delete or anonymize your information unless longer retention is required or permitted by law.
                </p>
              </section>

              {/* Section 7 */}
              <section id="childrens-privacy" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  7. CHILDREN'S PRIVACY
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-3 text-sm">
                  HEH's services are intended for adults (18 years and older). We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will take steps to delete that information promptly.
                </p>

                <p className="text-charcoal/80 leading-relaxed text-sm">
                  If you believe we have collected information from a child under 18, please contact us at <a href="mailto:privacy@entrepreneurhub.in" className="text-royal-gold hover:underline">privacy@entrepreneurhub.in</a>.
                </p>
              </section>

              {/* Section 8 */}
              <section id="international-transfers" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  8. INTERNATIONAL DATA TRANSFERS
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-3 text-sm">
                  Your information may be transferred to and processed in countries other than India, including countries that may not provide the same level of data protection as India.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-3 text-sm">
                  When we transfer information internationally, we ensure appropriate safeguards are in place, such as:
                </p>

                <ul className="list-disc pl-6 space-y-1 text-charcoal/80 mb-3 text-sm">
                  <li>Standard contractual clauses</li>
                  <li>Privacy Shield certification (where applicable)</li>
                  <li>Adequacy decisions by relevant authorities</li>
                </ul>

                <p className="text-charcoal/80 leading-relaxed text-sm">
                  By using our services, you consent to the transfer of your information as described in this Privacy Policy.
                </p>
              </section>

              {/* Section 9 */}
              <section id="third-party-links" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  9. THIRD-PARTY LINKS
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-3 text-sm">
                  Our website may contain links to third-party websites, services, or applications that are not operated by us. This Privacy Policy does not apply to third-party websites.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-4 text-sm">
                  We are not responsible for the privacy practices of third parties. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>

                <div>
                  <p className="font-semibold text-charcoal mb-2 text-sm">Third-party services we integrate with:</p>
                  <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                    <li>LinkedIn (for profile connections)</li>
                    <li>Google Maps (for location services)</li>
                    <li>Payment gateways (Razorpay, Stripe)</li>
                    <li>Event platforms (Eventbrite, Luma)</li>
                    <li>Analytics providers (Google Analytics)</li>
                  </ul>
                </div>
              </section>

              {/* Section 10 */}
              <section id="updates" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  10. UPDATES TO THIS PRIVACY POLICY
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-3 text-sm">
                  We may update this Privacy Policy from time to time to reflect:
                </p>

                <ul className="list-disc pl-6 space-y-1 text-charcoal/80 mb-5 text-sm">
                  <li>Changes in our practices</li>
                  <li>Legal or regulatory requirements</li>
                  <li>New features or services</li>
                  <li>Feedback from our community</li>
                </ul>

                <div className="mb-4">
                  <p className="font-semibold text-charcoal mb-2 text-sm">How we notify you of changes:</p>
                  <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                    <li>Update the "Last Updated" date at the top</li>
                    <li>Send email notification for material changes</li>
                    <li>Post prominent notice on our website</li>
                    <li>Require re-acceptance for significant changes</li>
                  </ul>
                </div>

                <p className="text-charcoal/80 leading-relaxed text-sm">
                  Your continued use of our services after the effective date of the updated Privacy Policy constitutes your acceptance of the changes. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              {/* Section 11 */}
              <section id="contact" className="mb-10 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  11. CONTACT US
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-4 text-sm">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                </p>

                <div className="bg-blue-50 border border-platinum rounded-lg p-5 space-y-3">
                  <div>
                    <p className="font-semibold text-charcoal mb-1 text-sm">Hyderabad Entrepreneurs Hub</p>
                    <p className="text-charcoal/80 text-sm">Privacy Officer / Data Protection Team</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="text-charcoal/80">
                      📧 <strong>Email:</strong> <a href="mailto:privacy@entrepreneurhub.in" className="text-royal-gold hover:underline">privacy@entrepreneurhub.in</a>
                    </p>
                    <p className="text-charcoal/80">
                      📧 <strong>General Inquiries:</strong> <a href="mailto:hello@entrepreneurhub.in" className="text-royal-gold hover:underline">hello@entrepreneurhub.in</a>
                    </p>
                    <p className="text-charcoal/80">
                      📱 <strong>Phone:</strong> +91 6300799266
                    </p>
                    <p className="text-charcoal/80">
                      🏢 <strong>Address:</strong><br />
                      Hyderabad Entrepreneurs Hub Pvt Ltd<br />
                      Plot no 115, Ashok Enclave,<br />
                      Netaji Nagar, Secunderabad,<br />
                      Telangana - 500062<br />
                      India
                    </p>
                    <p className="text-charcoal/80">
                      🕐 <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>

                  <div className="pt-3 border-t border-platinum text-sm">
                    <p className="text-charcoal/80 mb-2">
                      <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 5 business days.
                    </p>
                    <p className="text-charcoal/80">
                      <strong>For Complaints:</strong> If you believe we have not adequately addressed your privacy concerns, you have the right to lodge a complaint with the appropriate data protection authority in India.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12 */}
              <section id="consent" className="mb-8 scroll-mt-24">
                <h2 className="text-3xl font-semibold text-primary-blue mb-5">
                  12. CONSENT
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-3 text-sm">
                  By using HEH's website and services, you consent to:
                </p>

                <ul className="list-disc pl-6 space-y-1 text-charcoal/80 mb-5 text-sm">
                  <li>The collection and use of your information as described in this Privacy Policy</li>
                  <li>The sharing of your information as outlined above</li>
                  <li>The use of cookies and tracking technologies</li>
                  <li>International data transfers (if applicable)</li>
                </ul>

                <div className="mb-4">
                  <p className="font-semibold text-charcoal mb-2 text-sm">You can withdraw your consent at any time by:</p>
                  <ul className="list-disc pl-6 space-y-1 text-charcoal/80 text-sm">
                    <li>Updating your account settings</li>
                    <li>Contacting us at <a href="mailto:privacy@entrepreneurhub.in" className="text-royal-gold hover:underline">privacy@entrepreneurhub.in</a></li>
                    <li>Deleting your account</li>
                  </ul>
                </div>

                <p className="text-charcoal/80 leading-relaxed text-sm">
                  Withdrawal of consent will not affect the lawfulness of processing based on consent before withdrawal.
                </p>
              </section>

              {/* Download Option */}
              <div className="pt-6 border-t border-platinum">
                <button className="flex items-center gap-2 text-royal-gold hover:text-royal-gold/80 transition-colors">
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download Privacy Policy as PDF</span>
                </button>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border border-platinum p-5">
              <h3 className="font-semibold text-charcoal mb-3">Related Policies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="/terms" className="text-royal-gold hover:underline text-sm">Terms of Service</a>
                <a href="/cookies" className="text-royal-gold hover:underline text-sm">Cookie Policy</a>
                <a href="/contact" className="text-royal-gold hover:underline text-sm">Contact Us</a>
                <button onClick={() => (window as any).navigateTo?.('home')} className="text-royal-gold hover:underline text-left text-sm">
                  Back to Home
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-royal-gold hover:bg-royal-gold/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      <Footer />
    </div>
  );
}
