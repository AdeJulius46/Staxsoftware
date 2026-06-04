import React from 'react'



  export const Logo = ({ className = "h-8" }: { className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <span className="text-2xl font-sans font-black tracking-tighter text-on-surface">STA</span>
    <div className="relative flex flex-col items-center">
      <svg viewBox="0 0 60 40" className="w-12 h-8 fill-primary">
        {/* Top Triangle */}
        <path d="M 5 5 L 35 5 L 20 20 Z" />
        {/* Bottom Triangle */}
        <path d="M 5 35 L 35 35 L 20 20 Z" />
        {/* Horizontal lines to the right */}
        <rect x="30" y="10" width="15" height="1.5" rx="0.75" />
        <rect x="30" y="20" width="22" height="1.5" rx="0.75" />
        <rect x="30" y="30" width="30" height="1.5" rx="0.75" />
      </svg>
      <span className="absolute -bottom-2.5 left-0 whitespace-nowrap text-[6px] font-bold uppercase tracking-[0.1em] text-primary">
        Software Company
      </span>
    </div>
  </div>
);


function Navbar() {
  return (
    <div>
             <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(27,28,25,0.04)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
            <Logo />
          <div className="hidden md:flex items-center space-x-8">
            {["Commerce", "Health", "Education", "Hardware"].map((item) => (
              <a
                key={item}
                className="text-on-surface opacity-70 font-serif tracking-tight hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-6">
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
