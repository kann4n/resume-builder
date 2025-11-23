

const Templates = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-surface-alt relative overflow-hidden">
       {/* Background Blobs for Glassmorphism effect */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-text-main mb-4 tracking-tight">Professional Templates</h1>
          <p className="text-text-muted max-w-2xl mx-auto font-light">
            Choose from our collection of ATS-friendly templates designed to help you land your dream job.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="group relative glass rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[1/1.4] bg-white/50 relative overflow-hidden group-hover:bg-white/80 transition-colors">
                {/* Abstract Resume Preview - Non-copyrighted */}
                <div className="w-full h-full p-4 flex flex-col gap-2 opacity-60 group-hover:opacity-80 transition-opacity transform scale-90 group-hover:scale-95 duration-500">
                   <div className="flex gap-2 items-center mb-2">
                     <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                     <div className="space-y-1">
                       <div className="w-16 h-2 bg-gray-300 rounded-full"></div>
                       <div className="w-10 h-1.5 bg-gray-200 rounded-full"></div>
                     </div>
                   </div>
                   <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1"></div>
                   <div className="flex gap-2 h-full">
                      <div className="w-1/3 h-full bg-gray-100 rounded-lg"></div>
                      <div className="w-2/3 h-full space-y-2">
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-5/6 h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-4/5 h-2 bg-gray-200 rounded-full"></div>
                        <div className="mt-4 w-full h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                   </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="px-5 py-2 bg-primary/90 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-primary transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                    Use Template
                  </button>
                </div>
              </div>
              <div className="p-4 border-t border-white/20">
                <h3 className="font-medium text-text-main text-sm">Modern Professional {item}</h3>
                <p className="text-xs text-text-muted font-light mt-1">Clean & Minimal</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
