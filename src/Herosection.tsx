import React from 'react'
import { motion } from "motion/react";

const Herosection = () => {
  return (
    <div>
          <main className="fflex-grow pt-20 flex flex-col">
        {/* Left Side: Value Prop & Login */}
        <section className="flex flex-col md:flex-row min-h-[80vh]">
          {/* Left Side: Value Prop & Login */}
          <section className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-16 z-10">
            <div className="max-w-md">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-7xl font-serif text-on-surface leading-tight tracking-tight mb-4"
              >
                Innovate commerce, <br />
                <span className="text-primary italic">elevate health</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-on-surface-variant mb-12 leading-relaxed"
              >
                STAX delivers integrated software and hardware solutions for business management and medical excellence. From POS systems to hospital kits, we power your growth.
              </motion.p>

              {/* Login Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] mb-8"
              >
                <button className="w-full flex items-center justify-center gap-3 border border-outline-variant py-3 rounded-lg hover:bg-surface-container transition-colors mb-6">
                  <img
                    alt="Google Logo"
                    className="w-5 h-5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-39xWwnaC-kDxuq0tEf7shD9IazRgLFTzXmgJ2CSi3jHw8_7bDlTQpiFBccnSSJI3Sg89nLUGhR7GVBNdTcRjpNPJFxf8b6VITePLUbnJDncbRm6mOdJmLdsp8xW3dk7S1-VU9UqClA6mNJIVLU-2nJJaUqrI7Y5D4tACHZAn6ayWXhYgWwtFS9mKG_-N2R_zMO1o8vGw_WVTcp6rr7i0EOmF5NgaxcJMKFTrjiwcEAvV5UsIIN9uiZFb8RmRqP4LNDcXFoeNMuA"
                  />
                  <span className="font-medium text-on-surface">Continue with Google</span>
                </button>
                <div className="relative flex items-center mb-6">
                  <div className="flex-grow border-t border-outline-variant/30"></div>
                  <span className="flex-shrink mx-4 text-xs tracking-widest text-on-surface-variant/50 uppercase">OR</span>
                  <div className="flex-grow border-t border-outline-variant/30"></div>
                </div>
                <div className="space-y-4">
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Email address"
                    type="email"
                  />
                  <button className="w-full bg-on-surface text-surface py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Continue
                  </button>
                </div>
              </motion.div>

              <button className="flex items-center gap-3 text-on-surface-variant text-sm uppercase tracking-wider hover:text-primary transition-colors group">
                <span className="material-symbols-outlined text-[20px]">monitor</span>
                Download desktop app
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </section>

          {/* Right Side: Product Demo & Folders */}
          <section className=" w-full md:w-1/2 relative min-h-[600px] flex items-center justify-center dot-grid overflow-hidden bg-surface-container-low">
            {/* Floating Folder Modal A */}
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -10, filter: "blur(8px)" }}
              animate={{ opacity: 0.85, x: 0, rotate: -3, filter: "blur(4px)" }}
              whileHover={{ opacity: 1, rotate: 0, scale: 1.05, zIndex: 50, filter: "blur(0px)" }}
              className="  absolute top-20 left-10 glass-panel p-6 rounded-xl shadow-2xl w-64 z-20 cursor-default transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-tighter text-tertiary font-bold">STAX Solutions</span>
                <span className="material-symbols-outlined text-tertiary">more_horiz</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Commerce", desc: "POS & Financials" },
                  { name: "Health", desc: "Medical Management" },
                  { name: "Hardware", desc: "Integrated Kits" },
                  { name: "Software", desc: "Cloud Applications" },
                ].map((folder) => (
                  <div
                    key={folder.name}
                    className="relative aspect-square bg-tertiary-fixed rounded-lg flex flex-col items-center justify-center p-2 group cursor-pointer hover:bg-tertiary-fixed-dim transition-colors"
                  >
                    <span className="material-symbols-outlined text-tertiary text-3xl">folder</span>
                    <span className="text-[10px] mt-1 text-on-tertiary-fixed font-medium">{folder.name}</span>
                    
                    {/* Hover Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30 shadow-lg">
                      {folder.desc}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-on-surface"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Folder Modal B */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 10, filter: "blur(8px)" }}
              animate={{ opacity: 0.7, x: 0, rotate: 4, filter: "blur(4px)" }}
              whileHover={{ opacity: 1, rotate: 0, scale: 1.05, zIndex: 50, filter: "blur(0px)" }}
              className="absolute bottom-20 right-10 glass-panel p-6 rounded-xl shadow-2xl w-64 z-20 cursor-default transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-tighter text-primary font-bold">Core Products</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "POS Mini", desc: "Micro Business" },
                  { name: "Health Pro", desc: "Large Scale Medical" },
                  { name: "Kitcheck", desc: "Restaurant & Eatery" },
                  { name: "Hotelier", desc: "Hospitality Management" },
                ].map((folder, i) => (
                  <div
                    key={folder.name}
                    className="relative aspect-square bg-primary-fixed rounded-lg flex flex-col items-center justify-center p-2 group cursor-pointer"
                  >
                    <span 
                      className="material-symbols-outlined text-primary text-3xl"
                      style={{ fontVariationSettings: i === 0 ? "'FILL' 1" : "" }}
                    >
                      folder
                    </span>
                    <span className="text-[10px] mt-1 text-on-primary-fixed font-medium">{folder.name}</span>

                    {/* Hover Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30 shadow-lg">
                      {folder.desc}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interactive Demo UI */}
            <div className="w-[85%] h-[80%] bg-surface-container-lowest rounded-2xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border border-outline-variant/10">
              {/* Tab Bar */}
              <div className="h-14 bg-surface-container flex items-center px-4 gap-4">
                <div className="flex bg-surface-variant p-1 rounded-lg">
                  <button className="px-4 py-1 text-sm font-medium rounded-md transition-colors text-on-surface-variant">
                    Chat
                  </button>
                  <button className="px-4 py-1 text-sm font-medium rounded-md bg-surface shadow-sm text-on-surface">
                    Cowork
                  </button>
                </div>
                <div className="flex-grow h-8 bg-surface-variant/40 rounded-full"></div>
              </div>
              <div className="flex-grow flex overflow-hidden">
                {/* Cowork Surface */}
                <div className="flex-grow p-8 bg-surface">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold">STAX Integrated Ecosystem</h3>
                      <p className="text-xs text-on-surface-variant">Syncing STAXMini & Health Pro • Just now</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-surface-container rounded w-3/4"></div>
                    <div className="h-4 bg-surface-container rounded w-full"></div>
                    <div className="h-4 bg-surface-container rounded w-5/6"></div>
                    <div className="h-4 bg-surface-container rounded w-1/2"></div>
                    <div className="pt-8 grid grid-cols-2 gap-4">
                      <div className="h-32 bg-surface-container rounded-xl border-2 border-dashed border-outline-variant/30 flex items-center justify-center flex-col gap-2">
                        <span className="material-symbols-outlined text-outline-variant">point_of_sale</span>
                        <span className="text-[10px] text-on-surface-variant uppercase font-bold">POS KITS</span>
                      </div>
                      <div className="h-32 bg-surface-container rounded-xl border-2 border-dashed border-outline-variant/30 flex items-center justify-center flex-col gap-2">
                        <span className="material-symbols-outlined text-outline-variant">medical_services</span>
                        <span className="text-[10px] text-on-surface-variant uppercase font-bold">HEALTH KITS</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Context Sidebar */}
                <div className="w-64 border-l border-outline-variant/10 bg-surface-container-low p-6 flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-4">
                      Product Categories
                    </span>
                    <div className="space-y-3">
                      {[
                        { icon: "shopping_cart", name: "STAXMini POS", color: "text-tertiary" },
                        { icon: "health_and_safety", name: "STAXHealth Pro", color: "text-primary", bold: true },
                        { icon: "restaurant", name: "Kitcheck App", color: "text-secondary" },
                        { icon: "hotel", name: "Hotelier Suite", color: "text-on-surface" },
                      ].map((res) => (
                        <div
                          key={res.name}
                          className="flex items-center gap-2 p-2 bg-surface rounded-lg shadow-sm border border-outline-variant/5"
                        >
                          <span className={`material-symbols-outlined text-sm ${res.color}`}>{res.icon}</span>
                          <span className={`text-xs truncate ${res.bold ? "font-bold" : ""}`}>{res.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    {/* Build progress box removed as per user request */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

      </main>

    </div>
  )
}

export default Herosection
