import { useState } from 'react';
import { Plus, Minus, MessageCircle, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Who can join HEH?",
    answer: "HEH membership is exclusively for established entrepreneurs and business leaders whose ventures have achieved a minimum annual revenue of ₹2 crores. Members must be founders, partners, or directors actively involved in their business operations. We welcome entrepreneurs from diverse industries. Our selective admission process ensures that all members are serious, committed business leaders who can contribute to and benefit from our premium networking community."
  },
  {
    id: 3,
    question: "How is HEH different from other networking groups?",
    answer: "HEH stands apart through our strict eligibility criteria (₹2+ crore revenue requirement), ensuring you connect only with established business leaders. Unlike generic networking events, we facilitate strategic partnerships through curated introductions, sector-specific roundtables, and peer advisory boards. Our members have collectively generated ₹500+ crores in business growth, demonstrating real ROI. We limit membership to maintain quality interactions, provide verified business credentials for all members, and offer structured mentorship programs connecting you with industry veterans. Additionally, our focus on Hyderabad's entrepreneurial ecosystem creates deep local market insights and collaboration opportunities unavailable in national or generic business groups."
  },
  {
    id: 4,
    question: "What events and programs does HEH offer?",
    answer: "HEH organizes 2 events per month: a learning workshop and a business networking session. We also facilitate peer advisory boards, one-on-one mentorship matching, and exclusive investor connect sessions for fundraising opportunities. All events are scheduled in advance, and members receive priority registration and guest privileges."
  },
  {
    id: 5,
    question: "What is the application process?",
    answer: "Our application process has three simple steps: 1) Apply Online - Submit your application with business details and revenue information. 2) Interview - Shortlisted candidates are invited for a personal interview with HEH leadership. 3) Welcome - Approved applicants receive immediate access to member benefits. The entire process typically takes 5-7 business days."
  },
  {
    id: 6,
    question: "Can I attend an event before joining?",
    answer: "Yes! Prospective members can attend one session as a guest (either a workshop or business networking session) to experience our community firsthand. Guest attendance requires a referral from an existing HEH member or core team member. This allows you to meet current members and evaluate whether HEH aligns with your business goals before applying."
  },
  {
    id: 7,
    question: "I have less than ₹2 Cr revenue. Can I still join?",
    answer: "Yes, if approved by the HEH board based on your business potential and interaction with the team."
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-soft-blue to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-royal-gold text-xs font-semibold tracking-widest uppercase mb-3">
            GOT QUESTIONS?
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about joining Hyderabad's most exclusive entrepreneurial community.
            Can't find what you're looking for? <a href="mailto:hello@entrepreneurhub.in" className="text-royal-gold hover:underline">Contact us</a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`${index !== faqs.length - 1 ? 'border-b border-platinum/30' : ''}`}
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left px-6 lg:px-8 py-6 hover:bg-soft-blue/30 transition-colors duration-200 flex items-start justify-between gap-4 group focus:outline-none focus:ring-2 focus:ring-royal-gold focus:ring-inset"
                aria-expanded={openItems.includes(faq.id)}
                aria-controls={`answer-${faq.id}`}
              >
                <span className="text-base lg:text-lg font-semibold text-primary-blue group-hover:text-royal-gold transition-colors duration-200 leading-snug pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 mt-1">
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {openItems.includes(faq.id) ? (
                      <Minus className="w-6 h-6 text-royal-gold" />
                    ) : (
                      <Plus className="w-6 h-6 text-royal-gold" />
                    )}
                  </motion.div>
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openItems.includes(faq.id) && (
                  <motion.div
                    id={`answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: 'easeOut' },
                      opacity: { duration: 0.25, ease: 'easeOut' }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-6 bg-soft-blue/20">
                      <p className="text-base text-charcoal/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 bg-white rounded-2xl shadow-xl p-8 lg:p-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-royal-gold/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-royal-gold" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-primary-blue mb-3">
            Still have questions?
          </h3>
          <p className="text-charcoal/80 mb-6 max-w-md mx-auto">
            We're here to help. Get in touch with our team and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@entrepreneurhub.in"
              className="inline-flex items-center gap-2 bg-royal-gold hover:bg-royal-gold/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="https://wa.me/916300799266"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-platinum hover:border-royal-gold text-primary-blue hover:text-royal-gold px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-sm text-charcoal/60">
            Or start your application and we'll reach out to answer any questions
          </p>
        </div>
      </div>
    </section>
  );
}