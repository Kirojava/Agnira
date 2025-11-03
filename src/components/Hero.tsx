import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/20 via-transparent to-[#1a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block">
            <div className="mb-8 flex justify-center">
              <img 
                src="/images/agnira-logo.png" 
                alt="Agnira MUN Official Logo" 
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>
            <div className="text-sm font-semibold tracking-widest text-[#FFD700]/80 mb-4 uppercase" style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.3)' }}>
              Powered by Arsenic Branding
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4">
              <span className="block text-gradient drop-shadow-2xl">AGNIRA</span>
              <span className="block text-gradient drop-shadow-2xl">MUN</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
          </div>
        </div>

        <div className="mb-8 text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-300">
          <span className="text-[#FFD700]">×</span> EPS MUN 2025
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg">
          <div className="flex items-center gap-3 bg-[#8B0000]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#FFD700]/20">
            <Calendar className="w-5 h-5 text-[#FFD700]" />
            <span className="font-medium">November 6-7, 2025</span>
          </div>
          <div className="flex items-center gap-3 bg-[#8B0000]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#FFD700]/20">
            <MapPin className="w-5 h-5 text-[#FFD700]" />
            <span className="font-medium">East Point School, Delhi</span>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
          Join us for a premier Model United Nations conference where future leaders engage in
          diplomatic excellence, debate global issues, and forge lasting connections.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSelrH23DN5qR4vf9hxyv3f-4sjnpg7gpq16FidZAXjXIKf-0Q/viewform?pli=1&fbclid=PAb21jcAN1bhZleHRuA2FlbQIxMQABp66gEM6DpLZSTshaifMz_auz481NLygnlJVxqiWSzAhMJla2-xdH3iZAYTeZ_aem_FCeU7BI0-5RIN1l_GYRVwA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-[#FFD700] text-xl font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFD700]/50 hover:scale-105 border-2 border-[#FFD700]/30"
          >
            <span className="relative z-10 flex items-center gap-2 tracking-wide">
              REGISTER NOW!
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-lg hover:bg-[#FFD700] hover:text-[#1a0a0f] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD700]/30"
          >
            Learn More
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '4', label: 'Committees' },
            { number: '2', label: 'Days' },
            { number: '200+', label: 'Delegates' },
            { number: '1', label: 'Experience' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-[#8B0000]/30 to-[#1a0a0f]/50 backdrop-blur-sm rounded-xl border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/5 group-hover:to-[#FFD700]/10 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#FFD700] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
