import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-text-main tracking-tight mb-6 leading-tight animate-fade-in-up">
          Get dream jobs with our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            AI Powered
          </span> resume builder
        </h1>
        
        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-100">
          Build a professional and outstanding resume with our free builder and templates.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
          <Link to="/builder" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
            Create my resume
          </Link>
          <Link to="/builder" className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-gray-200 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 hover:border-primary/30">
            Improve resume
          </Link>
        </div>

        {/* Preview Card with Micro-interactions */}
        <div className="mt-20 relative mx-auto max-w-4xl perspective-1000 animate-fade-in-up animation-delay-300 group">
          {/* Floating Badges */}
          <div className="absolute -top-6 -right-6 z-20 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow hidden md:block">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-semibold text-gray-700">ATS Score: 98%</span>
            </div>
          </div>
          
          <div className="absolute top-1/3 -left-8 z-20 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow animation-delay-2000 hidden md:block">
             <div className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              <span className="text-sm font-semibold text-gray-700">AI Enhanced</span>
            </div>
          </div>

          {/* Main Card */}
          <div className="relative rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden transition-transform duration-500 transform group-hover:rotate-x-2 group-hover:scale-[1.01]">
            {/* Fake Browser Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto bg-white px-3 py-1 rounded-md text-xs text-gray-400 border border-gray-200 w-1/2 text-center">
                kesume.com/builder
              </div>
            </div>

            {/* Resume Content Preview */}
            <div className="p-8 md:p-12 text-left bg-white min-h-[400px] flex flex-col gap-6 opacity-90 group-hover:opacity-100 transition-opacity">
              {/* Header */}
              <div className="border-b border-gray-100 pb-6">
                <div className="h-8 w-1/3 bg-gray-800 rounded mb-3"></div>
                <div className="h-4 w-1/4 bg-primary/60 rounded"></div>
              </div>
              
              {/* Body */}
              <div className="grid grid-cols-3 gap-8 h-full">
                <div className="col-span-2 space-y-6">
                  <div className="space-y-3">
                    <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
                    <div className="h-3 w-full bg-gray-100 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                    <div className="h-3 w-4/5 bg-gray-100 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
                    <div className="h-3 w-full bg-gray-100 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="col-span-1 space-y-6">
                   <div className="h-32 w-full bg-blue-50 rounded-lg border border-blue-100"></div>
                   <div className="space-y-2">
                      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                      <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Hover Overlay for Interaction Hint */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
               <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                 <span className="text-primary font-semibold">Click to Edit</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
