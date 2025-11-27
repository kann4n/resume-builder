import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Background Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -z-10 animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-pink-200/30 rounded-full blur-[80px] -z-10 animate-blob animation-delay-4000"></div>

        {/* Left Content */}
        <div className="text-left z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-text-main tracking-tight mb-6 leading-[1.15] animate-fade-in-up">
            Create a professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">resume easily</span>
          </h1>
          
          <p className="text-xl text-text-muted max-w-lg mb-8 leading-relaxed animate-fade-in-up animation-delay-100">
            With this free, open-source, and powerful resume builder
          </p>
          
          <div className="flex flex-col items-start gap-4 animate-fade-in-up animation-delay-200">
            <Link to="/builder" className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1">
              Create Resume &rarr;
            </Link>
            <p className="text-sm text-text-muted ml-2">No sign up required</p>
          </div>
        </div>

        {/* Right Content - Resume Preview */}
        <div className="relative z-10 animate-fade-in-up animation-delay-300 perspective-1000">
          <div className="relative rounded-lg shadow-2xl border border-gray-200 bg-white overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500">
            {/* Mock Resume Header */}
            <div className="h-2 bg-gradient-to-r from-primary to-accent w-full"></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-1">Kannan</h2>
                  <p className="text-sm text-gray-600">Full Stack Web Developer</p>
                </div>
                <div className="text-right text-xs text-gray-500 space-y-1">
                  <p>kannan@example.com</p>
                  <p>+91 9999999999</p>
                  <p>Kochi, Kerala</p>
                </div>
              </div>

              {/* Mock Resume Body */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">Experience</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold text-gray-800">Senior Developer</span>
                        <span className="text-gray-500">2020 - Present</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Led a team of 5 developers to build a scalable e-commerce platform. Improved performance by 40% and reduced server costs.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold text-gray-800">Frontend Engineer</span>
                        <span className="text-gray-500">2018 - 2020</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Developed responsive user interfaces using React and Tailwind CSS. Collaborated with designers to implement pixel-perfect designs.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">Education</h3>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-gray-800">BS Computer Science</span>
                      <span className="text-gray-500">2014 - 2018</span>
                    </div>
                    <p className="text-xs text-gray-600">University of Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-[-20%] right-[-20%] w-[80%] h-[80%] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[80px]"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
