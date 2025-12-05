const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0f] via-[#2a0a15] to-[#1a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">About Agnira MUN</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Successfully completed our first edition. On our way to the second!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
