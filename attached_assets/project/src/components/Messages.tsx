import { Quote } from 'lucide-react';

const Messages = () => {
  const messages = [
    {
      name: 'Mrs. Amita Gupta',
      title: 'Chairperson',
      message:
        "We're thrilled to welcome you to EPS MUN 2025. This conference offers a unique opportunity for growth, learning, and leadership development. As you engage in debates, negotiations, and discussions, we hope you'll not only develop your skills but also forge lasting bonds with fellow delegates. We're confident that this conference will be a resounding success."
    },
    {
      name: 'Mrs. Archana Srivastava',
      title: 'Principal',
      message:
        "I'm excited to share our upcoming MUN event—an opportunity to engage in debates, advocate for important issues, and develop leadership skills. By representing assigned countries, you'll gain a deeper understanding of global challenges and contribute to meaningful change. I encourage you to participate wholeheartedly and let your passion shine!"
    },
    {
      name: 'Mr. Riaan Dhawan',
      title: "Arsenic's Founder",
      message:
        "Whether you've done MUNs before or this is your first time, this is your moment to challenge yourself, think big, and connect with people who are just as passionate as you. It's not just about speaking—it's about listening, learning, and leading. Go all in. Be bold. Can't wait to see what each of you brings to the table."
    },
    {
      name: 'Mr. Arijit Banik',
      title: "Agnira's Founder",
      message:
        "I'm really excited about what's coming up—a chance for all of us to step into global issues, speak our minds, and grow as leaders. By representing different countries, you'll get to see the world from new perspectives and tackle real-world problems head-on. MUN isn't just about debate—it's about finding your voice and using it."
    }
  ];

  return (
    <section id="messages" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0f] via-[#2a0a15] to-[#1a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Leadership Messages</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Words of encouragement and vision from our esteemed leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFD700]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/30 to-[#1a0a0f]/50 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/5 group-hover:to-[#FFD700]/10 transition-all duration-500" />

              <div className="relative p-8">
                <Quote className="w-12 h-12 text-[#FFD700] opacity-30 mb-6" />

                <p className="text-gray-300 leading-relaxed mb-8 text-lg">{message.message}</p>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FFD700] to-transparent" />
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-bold text-[#FFD700]">{message.name}</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">{message.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;
