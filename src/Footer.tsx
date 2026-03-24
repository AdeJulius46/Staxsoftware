import React from 'react'
import { Logo } from './Navbar'

function Footer() {
  return (
    <div>
      <footer className="w-full border-t border-outline-variant/15 bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 max-w-full mx-auto">
          <div className="text-on-surface-variant text-sm tracking-wide flex flex-col gap-4 items-center md:items-start">
            
            <span>
               <Logo />

              </span>
              
          <span>
            © 2026 STAX Technologies
          </span>
            </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Privacy Policy", "Terms of Service", "Consumer Health Privacy", "Twitter", "LinkedIn"].map((link) => (
              <a
                key={link}
                className="text-on-surface/60 text-sm tracking-wide hover:text-primary transition-colors"
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
