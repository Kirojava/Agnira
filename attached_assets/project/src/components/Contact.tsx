import { Phone, Mail, MapPin, Flame } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      name: 'Riaan Dhawan',
      phone: '+91 88004 83474',
      title: "Arsenic's Founder"
    },
    {
      name: 'Arijit Banik',
      phone: '+91 78358 79172',
      title: "Agnira's Founder"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0f] via-[#150a0f] to-[#1a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Contact Us</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help you with any inquiries about Agnira MUN 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD700]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/30 to-[#1a0a0f]/50 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/5 group-hover:to-[#FFD700]/10 transition-all duration-500" />

              <div className="relative p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-1">{contact.name}</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">{contact.title}</p>
                </div>

                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 text-lg text-gray-300 hover:text-[#FFD700] transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <span className="font-medium">{contact.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#8B0000]/30 to-[#1a0a0f]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#FFD700]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] rounded-xl flex items-center justify-center">
                <Mail className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFD700]">Email Us</h3>
                <p className="text-sm text-gray-400">For general inquiries</p>
              </div>
            </div>
            <a
              href="mailto:info@agniramun.com"
              className="text-gray-300 hover:text-[#FFD700] transition-colors text-lg"
            >
              info@agniramun.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#8B0000]/30 to-[#1a0a0f]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#FFD700]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] rounded-xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFD700]">Visit Us</h3>
                <p className="text-sm text-gray-400">Conference venue</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              East Point School, Vasundhara Enclave<br />
              FC-26, Dallapura Road, Delhi 110096
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#8B0000]/20 via-[#A52A2A]/20 to-[#8B0000]/20 backdrop-blur-sm rounded-3xl p-12 border border-[#FFD700]/20 text-center">
          <Flame className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gradient mb-4">Stay Connected</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, announcements, and behind-the-scenes content from Agnira MUN 2025.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['Instagram', 'Twitter', 'LinkedIn', 'Facebook'].map((platform, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#FFD700]/20 hover:scale-105 transition-all duration-300"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-24 border-t border-[#FFD700]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-8 h-8 text-[#FFD700]" />
                <div>
                  <div className="text-xl font-bold text-gradient">AGNIRA MUN</div>
                  <div className="text-xs text-[#FFD700]/70">× EPS MUN 2025</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering future leaders through diplomatic excellence and global collaboration.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#FFD700] mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Committees', 'Registration', 'Contact'].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#FFD700] mb-4">Event Details</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>November 6-7, 2025</p>
                <p>East Point School</p>
                <p>Vasundhara Enclave, Delhi</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#FFD700]/10 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Agnira MUN. Powered by Arsenic Branding. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
