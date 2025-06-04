
const Footer = () => {
  return (
    <footer className="bg-ssa-blue text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-montserrat font-bold mb-4">
              SHANTI SUCCESS ACADEMY
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Committed to providing quality education that transforms students into achievers. 
              We focus on building strong foundations and nurturing academic excellence.
            </p>
            <div className="text-ssa-yellow font-semibold">
              KEEP LEARNING | KEEP GROWING
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ssa-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Courses
                </a>
              </li>
              <li>
                <a href="#toppers" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Results
                </a>
              </li>
              <li>
                <a href="#faculty" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ssa-yellow">Contact Info</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+919324714072" className="hover:text-white transition-colors duration-200">
                  +91 93247 14072
                </a>
              </div>
              <div className="flex items-start">
                <span className="mr-2">💬</span>
                <a href="https://wa.me/919324714072" className="hover:text-white transition-colors duration-200">
                  WhatsApp Chat
                </a>
              </div>
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <div className="text-sm">
                  Shop No.16, Phase 1, Pavitra Dhrushti,<br/>
                  Naigaon(E) 401208
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Summary */}
        <div className="border-t border-blue-700 pt-8 mb-8">
          <h3 className="text-lg font-bold mb-4 text-ssa-yellow">Courses We Offer</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-100">
            <div>
              <strong className="text-white">Foundation Classes:</strong><br/>
              6th-10th (SSC & CBSE)
            </div>
            <div>
              <strong className="text-white">Higher Secondary:</strong><br/>
              XI-XII (Science & Commerce)
            </div>
            <div>
              <strong className="text-white">Competitive Exams:</strong><br/>
              JEE | NEET | MHT-CET
            </div>
          </div>
        </div>

        {/* Admission CTA */}
        <div className="bg-ssa-yellow text-ssa-blue p-6 rounded-xl mb-8 text-center">
          <h3 className="font-bold text-lg mb-2">🎯 Ready to Join SSA?</h3>
          <p className="mb-4">Get FREE Demo Lecture + 15% discount on admission!</p>
          <a
            href="#admission"
            className="bg-ssa-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors duration-200 inline-block"
          >
            Apply Now
          </a>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2024 Shanti Success Academy. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-blue-100">
              <span>Made with ❤️ for quality education</span>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-blue-200">
            <span>✅ 500+ Students Taught</span>
            <span>✅ 8+ Years Experience</span>
            <span>✅ 95% Success Rate</span>
            <span>✅ Affordable Fees</span>
            <span>✅ Expert Faculty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
