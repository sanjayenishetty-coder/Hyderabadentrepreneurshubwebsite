import { Badge } from '../ui/badge';

export function EligibilitySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-blue via-charcoal to-primary-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2030m-20%200a20%2020%200%201%201%2040%200a20%2020%200%201%201-40%200%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-royal-gold/20 text-royal-gold border-royal-gold/30 mb-4">
            Exclusive Membership
          </Badge>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            Membership Eligibility
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We maintain high standards to ensure our community consists of serious, 
            committed entrepreneurs who contribute to collective growth.
          </p>
        </div>

        {/* Application Process */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="font-playfair text-2xl font-bold text-center mb-8">
            Application Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Apply Online</h4>
              <p className="text-sm text-white/80">Submit your application with business details</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Interview</h4>
              <p className="text-sm text-white/80">Personal interview with HEH leadership</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Welcome</h4>
              <p className="text-sm text-white/80">Join our exclusive entrepreneurial community</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            <strong>Note:</strong> Applications are reviewed weekly. Due to our selective admission process, 
            we accept approximately 60% of qualified applications to maintain community quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => (window as any).navigateTo?.('apply')} className="bg-royal-gold hover:bg-royal-gold/90 text-primary-blue px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Application
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-royal-gold/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-royal-gold/10 rounded-full blur-xl"></div>
    </section>
  );
}