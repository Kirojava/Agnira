import { MapPin, School, Calendar } from 'lucide-react';

const Venue = () => {
  return (
    <section id="venue" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0f] via-[#150a0f] to-[#1a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Venue</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="group relative overflow-hidden rounded-3xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/30 to-[#1a0a0f]/50 backdrop-blur-sm" />

              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] rounded-2xl flex items-center justify-center">
                    <School className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#FFD700]">East Point School</h3>
                    <p className="text-sm text-gray-400">Vasundhara Enclave, Delhi</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-300 leading-relaxed">
                        FC-26, Dallapura Road, Near Maharaja Agrasen College
                      </p>
                      <p className="text-gray-300">Vasundhara Enclave, Delhi 110096</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                    <p className="text-gray-300">November 6-7, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#1a0a0f]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#FFD700]/10">
              <h4 className="text-xl font-bold text-[#FFD700] mb-4">About East Point School</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Established in 1988, East Point School, Vasundhara Enclave, Delhi, is a progressive
                institution committed to holistic education and all-round development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Under the leadership of Principal Mrs. Archana Shrivastava, the school fosters academic
                excellence, creativity, and values, preparing students to become confident, responsible,
                and compassionate global citizens.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-[#FFD700]/20 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/40 to-[#1a0a0f]/60 backdrop-blur-sm" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0926917384823!2d77.30817931508!3d28.652841982418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb6e7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sEast%20Point%20School!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0f] via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1a0a0f] to-transparent">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#FFD700]" />
                <div>
                  <p className="text-white font-semibold">East Point School</p>
                  <p className="text-sm text-gray-300">Vasundhara Enclave, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
